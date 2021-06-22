import mongoose from 'mongoose'

const whatsappSchema = mongoose.Schema({
    message : String,
    name : String,
    TimeSpam :String,
    Received : Boolean
});

export default mongoose.model('whatsappmessages',whatsappSchema)
