import { useState } from "react";
import Cookies from "js-cookie";

type ChannelPopupProps = {
  close: () => void;
};

export default function ChannelPopup({ close }: ChannelPopupProps) {
  const [channel, setChannel] = useState("");

  const createChannel = () => {
    Cookies.set("channel", channel);
    close();
    window.location.reload();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createChannel();
    }
  };

  return (
    <div className="absolute w-screen h-screen bg-[#00000090] z-10 flex items-center justify-center text-black">
      <div className="bg-white rounded-lg min-h-64 w-96 py-2 px-3">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg">Create | Join channel</h3>
          <span className="font-bold cursor-pointer" onClick={close}>
            X
          </span>
        </div>
        <div className="flex flex-col items-center">
          <p>
            Join your own channel and have the privacy of chatting with your
            friends! Enter channel name below.
          </p>
          <input
            className="border border-gray-700 rounded-md w-full h-8 px-2 outline-none mt-4"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="mt-8 bg-gray-400 px-4 py-2 rounded-lg"
            onClick={createChannel}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
