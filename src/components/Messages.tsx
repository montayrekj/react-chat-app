import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import Message from "./Message";
import Cookies from "js-cookie";

export type FetchedMessage = {
  id: string;
} & DocumentData;

export default function Messages() {
  const channel = Cookies.get("channel");
  const [messages, setMessages] = useState<FetchedMessage[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, `messages${channel ? `-${channel}` : ""}`),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: FetchedMessage[] = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages
        .filter((message) => !!message.createdAt)
        .sort((a, b) => a.createdAt - b.createdAt);
      setMessages(sortedMessages);
    });
    return () => {
      unsubscribe();
    };
  }, [channel]);

  return (
    <div className="p-4 flex flex-col gap-4">
      {messages?.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
}
