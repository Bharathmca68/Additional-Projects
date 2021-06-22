import React, { useState } from 'react'
import './chat.css'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

function Chat( {messages} ) {
    

    const [input, setInput] = useState("")

    const sendMessage = async (e) =>{
        e.preventDefault();

        await axios.post("message/new",{
            message : input,
            name : "Bharath M",
            TimeSpam :"Just now!",
            Received : true
        })

        setInput('');
    }


    return (
        <div className="Chatbar">
            <div className="Chatbarheader">
                <Avatar className="avatar" alt="Bharath" src="https://lh3.googleusercontent.com/ogw/ADGmqu8aAydNxcF525ub_fCHlSv_MpUgaHgIxysFJprQxA=s83-c-mo" />
                
                <div className="chat_headerInfo">
                    <h3>Bharath M</h3>  
                    <p>Last Seen at...</p>  
                </div>   
                <div className="chat_headerRight"> 
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton> 
                    </div>  
            </div>
            <div className="chat_body">

                {messages.map((item) => {
                   return <p className={`chat_msg ${item.Received  && "chat_receiver"}`}>
                        <span className="chat_name">{item.name}</span>
                            {item.message}
                        <span className="chat_timestamp">{new Date().toUTCString()}</span>
                    </p>
                            
                 })}
               

               

            </div>
            
            <div className="footer">
                <InsertEmoticonIcon/>
               
                <form>
                    <input  value={input} onChange={e => setInput(e.target.value)} placeholder="type the message" type="text"/>
                    <button  onClick={sendMessage} type="submit">Send a mesage</button>
                </form>
                <MicIcon/>
            </div>


        </div>
    );
}

export default Chat;