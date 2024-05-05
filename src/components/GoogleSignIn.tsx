import Google from "../assets/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";
import classNames from "classnames";

type GoogleSignInProps = {
  isMobileMinimal?: boolean;
};

export default function GoogleSignIn({
  isMobileMinimal = true,
}: GoogleSignInProps) {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <button
      className="flex items-center gap-2 bg-white rounded-lg overflow-hidden text-gray-700 px-2 py-1 text-sm"
      onClick={googleSignIn}
    >
      <img src={Google} width={20} height={20} />
      <span className={classNames({ "hidden md:block": isMobileMinimal })}>
        Sign in with Google
      </span>
    </button>
  );
}
