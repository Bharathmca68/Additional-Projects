import {React, useEffect, useState} from 'react'
import './App.css';
import Chat from './chat';
import Sidebar from './sidebar';
import Pusher from 'pusher-js';
import axios from './axios';



function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
      axios.get('/message/sync').then((res) => {
        setMessages(res.data);
      });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('fda20e1fec15e4db9478', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(newMsg) => {
      
      setMessages([...messages, newMsg])
    });

    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);


  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat messages={ messages }/>
      </div>
    </div>
  );
}

export default App;
