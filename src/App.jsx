import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Header />
      <section>{user ? <ChatRoom /> : <SignIn auth={auth} />}</section>
      <Footer />
    </>
  );
}

export default App;
