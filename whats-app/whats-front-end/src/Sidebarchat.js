import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebarchat.css'

function Sidebarchat(){
    return <div className="sidebarchat">
        <Avatar/>
        <div className="sidebarchat_info">
            <h2>Room name</h2>
            <p>This Message is deleted</p>
        </div>
    </div>;
}

export default Sidebarchat;