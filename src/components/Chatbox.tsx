import Sidebar from "./Sidebar";

import SendMessageButton from "./SendMessageButton";
import Messages from "./Messages";

export default function Chatbox() {
  return (
    <div className="md:grid grid-cols-4">
      <Sidebar />
      <div className="col-start-2 col-end-5 h-screen grid grid-rows-[1fr_35px]">
        <Messages />
        <SendMessageButton />
      </div>
    </div>
  );
}
