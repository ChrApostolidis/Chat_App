import { auth } from "../firebase";

export default function SignOut() {
  return (
    <div className="sign-out">
      {auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )}
    </div>
  );
}
