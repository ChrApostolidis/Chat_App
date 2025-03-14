import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";

export default function SignIn() {
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider(); // Creating a new Google Auth Provider
      await signInWithPopup(auth, provider); // Opening the google sign in popup
    } catch (error) {
      console.error("Error signing in:", error); // handling errors
    }
  };

  return (
    <div className="header-container">
      <div className="disclaimer-container">
        <h2 className="disclaimer-header">Disclaimer!!</h2>
        <p>The App works with Google Sign In for <span className="security">Security Reasons</span>.</p>
      </div>
      <div className="container-sign-in">
        <button onClick={signInWithGoogle}>
          Sign in with Google
          <img src="https://www.google.com/favicon.ico" alt="Google Favicon" />
        </button>
      </div>
    </div>
  );
}
