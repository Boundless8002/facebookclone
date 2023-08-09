import React, { useState } from 'react' ;
import { Avatar,IconButton,Modal } from '@mui/material';

import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import "./CSS/messagesender.css" ;
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useStateValue } from './StateProvider';
// import firebase from 'firebase';
import {db, storage} from "./firebase"
import firebase from "firebase/compat/app" ;
import "firebase/compat/auth" ;
import "firebase/compat/firestore" ;
import 'firebase/compat/storage';  


function Messagesender() {

  const [{user},dispatch]=useStateValue();
  const [open,setOpen]=useState(false);
  const [image,setImage]=useState("");
  const [message,setMessage]=useState("");
  const [progress,setProgress]=useState(0);

const handleClose=()=>{
   setOpen(false);
}
const handleOpen=()=>{
  setOpen(true);
}
const uploadFilewithClick=()=>{
document.getElementById("imageFile").click();
}
const handleChange=(e)=>{
if(e.target.files[0]){
  setImage(e.target.files[0]);
}
}
const handleUpload=(e)=>{
  e.preventDefault();
  if(image===""){
    db.collection("posts").add({
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      message:message,
      username:user.displayName,
      photoURL:user.photoURL
    })
  }
  else{
const uploadTask=storage.ref(`images/${image.name}`).put(image);
    
uploadTask.on(
  "state_changed",
  (snapshot)=>{
const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
setProgress(progress);
  },
  (error)=>{
    console.log(error);
    alert(error.message);
  },
  ()=>{
    storage.ref("images").child(image.name).getDownloadURL().then(url=>{
      db.collection("posts").add({
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        message:message,
        username:user.displayName,
        photoURL:user.photoURL,
        image:url
  
      })
    })
  }
)
  }
  handleClose();
  setMessage("");
  setImage("");
  setProgress();
}
  return (
    <>
    <Modal open={open} onClose={handleClose}>
     <div className="modal_pop">
      <form>
        <div className="modalHeading">
          <h3>Create Post</h3>
          <IconButton onClick={handleClose}>
          <CloseIcon/>
          </IconButton>
        </div>
        <div className="modalHeader_top">
          <Avatar src={user.photoURL}/>
          <h5>{user.displayName}</h5>
        </div>
        <div className="modalBody">
          <form>
          <textarea rows="5" placeholder="What's on your mind,Amit?" onChange={(e)=>setMessage(e.target.value)} >{message}</textarea></form>
        </div>
        <div className="modalFooter">
          <div className="modalFooterLeft">
            <h4>Add to your post</h4>
          </div>
          <div className="modalFooterRight">
            <IconButton>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" onClick={uploadFilewithClick} onChange={handleChange} />
              
              <input type="file" id="imageFile" style={{display:"none"}}/>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png"/>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"/>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png"/>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/pkbalDbTOVI.png"/>
              
              <MoreHorizIcon/>
            </IconButton>
          </div>
        </div>
        {image!=="" && <h2>Image is uploaded</h2>}
{
  progress!="" && <progress value={progress} max='100' style={{'width':'100%','marginBottom':'20px'}}/>
}

        <input type="submit" onClick={handleUpload}className="post_submit" value="Post"/>
      </form>
     </div>
    </Modal>
    <div className="messagesender">
        <div className="messagesender_top">
        <Avatar src={user.photoURL}/>
        <form>
            <input type="text" placeholder="What's on your mind,Amit?" onClick={handleOpen}/>
        </form>
        </div>    
        <div className="messagesender_bottom">
        <div className="messangerOptions">
        <VideoCallIcon style={{color:'red'}}/>
        <p>Live video</p>
        </div>

        <div className="messangerOptions">
        <AddToPhotosIcon style={{color:'lightgreen'}}/>
        <p>Photo/video</p>
        </div>
        <div className="messangerOptions">
        <InsertEmoticonIcon style={{color:'#ffb100'}}/>
        <p>Feeling/activity</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Messagesender
