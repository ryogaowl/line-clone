import React, { useEffect, useRef, useState } from "react";
import SignOut from "./SignOut";
import { auth, db } from "../pages/firebase";
import SendMessage from "./SendMessage";
import styles from "../styles/Home.module.css";
const Line = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <SignOut />
      <div className={styles.msgs}>
        {messages.map(({ id, text, photoURL, uid }) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <div key={id}>
              <div
                className={`msg ${
                  uid === auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
};

export default Line;
