import React from 'react'
import './sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import Sidebarchat from './Sidebarchat';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">   
            <Avatar  alt="Bharath" src='https://yt3.ggpht.com/yti/ANoDKi5BcX3LwSilVEYyXgo6NNs2zWFiFKkq-ZtyODVO=s88-c-k-c0x00ffffff-no-rj-mo'/>
                <div className="sidebar_headerRight">

                
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div> 
            </div>  
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                <SearchIcon/> 
                <input type="text" placeholder="Search or start new chat"></input>
                </div>  
            </div>
            <div className="sidebar_chats">
                <Sidebarchat/>
                <Sidebarchat/>
                <Sidebarchat/>
                <Sidebarchat/>
                <Sidebarchat/>
                
            </div>
        </div>
       


    );
}

export default Sidebar;