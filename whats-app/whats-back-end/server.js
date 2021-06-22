//importing

import  express  from "express";
import mongoose from 'mongoose'
import Messages from '../whtsapp-backend/dbMessages.js'
import Pusher from "pusher";
import  cors from "cors";


//app config
const app = express()
const port = process.env.PORT ||1990;


const pusher = new Pusher({
    appId: "1210120",
    key: "fda20e1fec15e4db9478",
    secret: "e258ad800e54647363df",
    cluster: "ap2",
    useTLS: true
  });

//middle ware
app.use(express.json())

app.use(cors())
//securing info cors error instead of using the below we can go with the above one line code by installing cors 

// app.use((req, res, next)=> {
//     res.setHeader('Access-Control-Allow-Origin',"*");
//     res.setHeader('Access-Control-Allow-Headers','*');
//     nect();
// });


//DB config
const connection_url='mongodb+srv://mohan:abcd@cluster0.pwsps.mongodb.net/whatsappDB?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})



const db = mongoose.connection

db.once('open',()=> {
    console.log("DB is connected")
    
    const msgCollection = db.collection("whatsappmessages");
    const changeStream = msgCollection.watch();

    changeStream.on("change",(change=> {
        console.log(change);

        if(change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',
                {
                    name : messageDetails.name,
                    message : messageDetails.message,
                    Received : messageDetails.Received
                }
            );
        } else {
            console.log('error in trigger pusher')
        }
    }));
});




//api routes
app.get('/',(req, res)=> res.status(200).send("hello world"));


app.get('/message/sync',(req,res)=>{
    Messages.find((err, data)=>{
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/message/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})



//listen
app.listen(port, ()=> console.log(`listing in the ${port}` ))