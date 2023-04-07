import React from 'react' ;
import Sidebaroptions from "./Sidebaroptions" ;
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Avatar } from '@mui/material';
import "./CSS/sidebar.css" ;
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="sidebar">
      <Sidebaroptions  Avatar src={user.photoURL} title={user.displayName}/>
      <Sidebaroptions Icon={GroupIcon} title="Friends" />
      <Sidebaroptions Icon={GroupsIcon} title="Groups" src=""/>
      <Sidebaroptions  Icon={BookmarkIcon} title="Saved"/>
      <Sidebaroptions  Icon={FlagCircleIcon } title="Pages" />
      {/* <Sidebaroptions title="Ad Centre" src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png"/>
      <Sidebaroptions title="Most recent" src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png"/>
      <Sidebaroptions src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQSTJQJLLwMW_DGCO0S6wfldFrI4MmRzL5QkkCLocBAQUIe94Ksv0u3xwLe3mhkXTHEdetKYIVOY&usqp=CAU&ec=48600113" title="Marketplace"/> */}
      <Sidebaroptions  Icon={OndemandVideoIcon} title="Watch"/>
      <Sidebaroptions  Icon={AccessTimeIcon} title="Memories"/>
      {/* <Sidebaroptions  src="https://www.shutterstock.com/image-vector/events-calendar-menu-icon-vector-260nw-2034331094.jpg" title="Events"/> */}
      <Sidebaroptions Icon={KeyboardArrowDownIcon}title="See more"/>
    </div>
  )
}

export default Sidebar
