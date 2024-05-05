import SendIcon from "../assets/send.png";
import { useState } from "react";
import { auth, db } from "../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Cookies from "js-cookie";

export default function SendMessageButton() {
  const channel = Cookies.get("channel");
  const [message, setMessage] = useState("");

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (message.trim() === "") {
        alert("Enter valid message");
        return;
      }
      const { uid, displayName, photoURL } = auth.currentUser!;
      await addDoc(collection(db, `messages${channel ? `-${channel}` : ""}`), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
      setMessage("");
    }
  };

  return (
    <div className="relative">
      <input
        className="text-black px-2 h-full w-full outline-none"
        placeholder="Enter message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <img
        src={SendIcon}
        className="absolute z-10 top-[5px] right-2 cursor-pointer"
        width={22}
        height={22}
      />
    </div>
  );
}
