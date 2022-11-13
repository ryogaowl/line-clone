import React, { useState } from "react";
import { db, auth } from "../pages/firebase";
import firebase from "firebase/compat/app";
import { Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/send";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button onClick={sendMessage}>
            <SendIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
