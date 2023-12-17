import LoginForm from "./LoginForm";
import { useState } from "react";
export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const nameInputChange = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };
  const signIn = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      {isLoggedIn ? (
        <div>
          <p>Welcome {username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm onNameInputChange={nameInputChange} onSignIn={signIn} />
      )}
    </>
  );
}
