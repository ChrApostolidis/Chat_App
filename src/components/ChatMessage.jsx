import { auth } from "../firebase";

export default function ChatMessage({ messages }) {
  const { text, uid, photoURL } = messages;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="photo of the user" />
      <p>{text}</p>
    </div>
  );
}
