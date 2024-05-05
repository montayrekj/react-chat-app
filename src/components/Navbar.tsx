import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleSignIn from "./GoogleSignIn";

export default function Navbar() {
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <header className="shadow-2xl bg-[#031645]">
      <div className="flex justify-between max-w-screen-2xl mx-auto p-4 ">
        <h1 className="text-3xl !text-[#aaa]">
          Let's <span className="!text-[#eee]">chat</span>!
        </h1>
        {user ? (
          <button
            className="bg-white rounded-lg overflow-hidden text-gray-700 px-2 py-1 text-sm"
            onClick={signOut}
          >
            {" "}
            Sign out{" "}
          </button>
        ) : (
          <GoogleSignIn />
        )}
      </div>
    </header>
  );
}
