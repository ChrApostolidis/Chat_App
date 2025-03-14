import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase.js";
import {
  collection,
  query,
  orderBy,
  limit,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import ChatMessage from "./ChatMessage.jsx";
import { useRef, useState } from "react";
import { auth } from "../firebase.js";

export default function ChatRoom() {
  const [formValue, setFormValue] = useState("");
  const dummy = useRef();

  const messagesRef = collection(db, "messages");
  const messageQuery = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(messageQuery, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-container">
      <div className="main">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} messages={msg} />)}
        <div ref={dummy}></div>
      </div>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Write your Message here..."
        />
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
