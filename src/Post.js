import { Avatar } from '@mui/material';
import React from 'react';
import "./CSS/post.css" ;
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';


function Post({photoURL,image,username,timestamp,message}) {
  return (
    <div className="post">
        <div className="post_top">
        <div className="post_topleft">
          <Avatar src={photoURL}/>
          <div className="postinfo">
          <h4>{username}</h4>
          <p>{timestamp} <PublicIcon/></p>
          
          </div>
        </div>
        <MoreHorizIcon onClick={()=>{
          
          alert("Do u want to Delete this post")
        }}/>
        </div>
        <div className="post_middle">
          <p>{message}</p>
          {image && <img src={image} alt=""/>}
          
          
        </div>
        <div className="post_bottom">

        <div className="post_bottomOptions">
          <ThumbUpIcon id="thumps"/><p 
          onClick={()=>{
            document.getElementById("thumps").style.color="blue"}}
          >Like</p>
          </div>
          <div className="post_bottomOptions">
          <ChatBubbleOutlineIcon/><p>Comment</p>
          </div>
          <div className="post_bottomOptions">
          <ShareIcon/><p>Share</p>
          </div>
        </div>
      
    </div>
  )
}

export default Post

