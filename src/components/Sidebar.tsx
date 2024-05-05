import { auth } from "../lib/firebase";
import Cookies from "js-cookie";
import ChannelPopup from "./ChannelPopup";
import { useState } from "react";

export default function Sidebar() {
  const [openPopup, setOpenPopup] = useState(false);
  const channel = Cookies.get("channel");
  const isMainChannel = !channel || channel === "main";

  const signOut = () => {
    auth.signOut();
  };

  const goToMainChannel = () => {
    Cookies.set("channel", "");
    window.location.reload();
  };

  return (
    <>
      <div className="bg-[#031645] h-screen flex flex-col justify-between pt-4 pb-8 items-center px-8">
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-3xl !text-[#aaa] text-center ">
            Let's <span className="!text-[#eee]">chat</span>!
          </h1>
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-bold text-center">
              You are in the {channel ?? "main"} channel!
            </h3>
            <p className="text-sm text-center mt-4">
              You can also{" "}
              {isMainChannel ? "create your own or" : "join the main channel"}{" "}
              join another channel if you want to have a chat with your friends.
            </p>
            <button
              className="mt-8 text-sm bg-white text-gray-700 px-3 py-2 rounded-lg"
              onClick={() =>
                isMainChannel ? setOpenPopup(true) : goToMainChannel()
              }
            >
              {isMainChannel ? "Create own/join channel" : "Join main channel"}
            </button>
          </div>
        </div>
        <div>
          <button
            className="bg-white rounded-lg overflow-hidden text-gray-700 px-2 py-1 text-sm h-8 w-24"
            onClick={signOut}
          >
            {" "}
            Sign out{" "}
          </button>
        </div>
      </div>
      {openPopup && <ChannelPopup close={() => setOpenPopup(false)} />}
    </>
  );
}
