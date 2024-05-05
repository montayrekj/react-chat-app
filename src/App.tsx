import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./lib/firebase";
import Welcome from "./components/Welcome";
import Chatbox from "./components/Chatbox";

function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <Chatbox /> : <Welcome />}</>;
}

export default App;
