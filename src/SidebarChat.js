import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material/";
import "./SidebarChat.css";
import db from "./firebase";
import { addDoc, collection } from "firebase/firestore";

function SidebarChat({ id, name, addNewChat }) {
  const roomCollections = collection(db, "rooms");
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      // add something
      addDoc(roomCollections, { name: roomName });
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
