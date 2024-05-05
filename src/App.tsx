import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/Navbar";
import { auth } from "./lib/firebase";
import Welcome from "./components/Welcome";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Navbar />
      {!user && <Welcome />}
    </>
  );
}

export default App;
