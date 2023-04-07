import { Avatar } from '@mui/material';
import React from 'react';
import "./CSS/story.css" ;

function Storyreel() {
  return (
    <div className="storyReel">
        <div className="story" style={{backgroundImage:`url('https://wallpaperaccess.com/full/7092220.jpg')`}}>
      <Avatar src="https://imgcdn.floweraura.com/DSC_7704_0.jpg"/>
      <h4>Amit Singh</h4>
      </div>
      <div className="story" style={{backgroundImage:`url('https://png.pngtree.com/thumb_back/fh260/background/20210101/pngtree-double-row-tree-path-with-yellow-deciduous-autumn-leaves-image_519106.jpg')`}}>
      <Avatar src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"/>
      <h4>Kuldeep Chauhan</h4>
      </div>
      <div className="story" style={{backgroundImage:`url('https://e0.pxfuel.com/wallpapers/412/168/desktop-wallpaper-beautiful-flowers-roses-nature-background-thumbnail.jpg`}}>
      <Avatar src="https://cdn.britannica.com/35/3635-004-F5B51870/Scarlet-macaw.jpg"/>
      <h4>Anjali</h4>
      </div>
      <div className="story" style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIxhiOV4DyyimhegRSlMQTvI2m_pLvePqkfs4Ui2zY7w&usqp=CAU&ec=48600113')`}}>
      <Avatar src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"/>
      <h4>Prateek</h4>
      </div>
    </div>
  )
}

export default Storyreel


