import React ,{useState,useEffect} from 'react' ;
import "./CSS/feed.css" ; 
import {db} from "./firebase"

import Storyreel from "./Storyreel" ;
import Messagesender from "./Messagesender";
import Post from "./Post";

function Feed() {
  const[posts,setPosts]=useState([]);
  useEffect(()=>{
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data(),
      })))
    })
  },[])
  return (
    <div className="feed">
      <Storyreel/>
      <Messagesender/>
      {
        posts.map((post,index)=>{
         return <Post id={`postItem${index}`} photoURL={post.data.photoURL} image={post.data.image} username={post.data.username}  timestamp="12.40 PM" message={post.data.message}/>
        })
      }
      
      {/* <Post photoURL="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" username="Shobhit sharma"  timestamp="02.28 PM" message="Sunset Clouds"/> */}
      {/* <Post/> */}
    </div>
  )
}

export default Feed;
