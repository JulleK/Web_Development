import "./App.css";
import { useState } from "react";
import LoginForm from "./loginForm";

function App() {
  const [user, setUser] = useState({ username: "", age: 0 });
  return (
    <div>
      {user.username && (
        <h1>
          Hello {user.username}, {user.age}
        </h1>
      )}
      <LoginForm />
    </div>
  );
}

export default App;
