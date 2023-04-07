import React from 'react';
import "./CSS/right.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';

function RightSidebar() {
  return (
    <div className="widget">
      <div className="widget_header">
        <div className="widget_headerLeft">
          <h4>Your Pages</h4>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className="widget_body">
        <div className="widget_bodyOptions " >
          <Avatar src="https://imgcdn.floweraura.com/DSC_7704_0.jpg"/>
          <h4>Amit Singh</h4>
        </div>

        <div className="widget_bodyOptions ml10" >
          <NotificationsNoneIcon/>
          <p>Notification</p>
        </div>

        <div className="widget_bodyOptions ml10" >
          <VolumeUpIcon/>
          <p>Create Promotion</p>
        </div>
      </div>
      <hr/><br/>

      <div className="widget_header">
        <div className="widget_headerLeft">
          <h4>Contact</h4>
        </div>
        <div className="widget_headerRight">
            <VideoCallIcon/>
            <SearchIcon/>
            <MoreHorizIcon/>
        </div>
        </div>
        <div className="widget_body">
        <div className="widget_bodyOptions " >
          <Avatar src="https://imgcdn.floweraura.com/DSC_7704_0.jpg"/>
          <h4>Amit Singh</h4>
        </div>
        <div className="widget_bodyOptions " >
          <Avatar src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"/>
          <h4>Kuldeep Chauhan</h4>
        </div>
        <div className="widget_bodyOptions " >
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLaa-t0nBQ8lL2V_Jh6eL1KTKJQelIUYix7_n8Fmi4A&usqp=CAU&ec=48600113"/>
          <h4>Shashi Kumari</h4>
        </div>
        <div className="widget_bodyOptions " >
          <Avatar src="https://m.economictimes.com/thumb/msid-69139984,width-1200,height-900,resizemode-4,imgsize-220108/captainamerica.jpg"/>
          <h4>Abhishek sharma</h4>
        </div>
        <div className="widget_bodyOptions " >
          <Avatar src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863"/>
          <h4>Shobhit sharma</h4>
        </div>
        <div className="widget_bodyOptions " >
          <Avatar src="https://cdn.firstcry.com/education/2022/05/10115227/1914539905.jpg"/>
          <h4>Amarpreet Kaur</h4>
        </div>
        <div className="widget_bodyOptions " >
          <Avatar src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-62108,resizemode-1,msid-96708071/news/sports/former-bcci-president-sourav-ganguly-set-to-join-delhi-capitals-as-director-of-cricket.jpg"/>
          <h4>Rohit Chattrasal</h4>
        </div>
        </div>
    </div>
  )
}

export default RightSidebar
