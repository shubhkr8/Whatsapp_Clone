import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@mui/material/";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  // const roomCollections = collection(db, "rooms");

  useEffect(() => {
    const roomCollections = collection(db, "rooms");
    const getUsers = async () => {
      const data = await getDocs(roomCollections);
      setRooms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    // db.collection("rooms").onSnapshot((snapshot) =>
    //   setRooms(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       data: doc.data(),
    //     }))
    //   )
    // );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
