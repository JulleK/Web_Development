export default function LoginForm({ onNameInputChange, onSignIn }) {
  return (
    <>
      <div>
        <label htmlFor="login">Login: </label>
        <input
          type="text"
          name="login"
          id="login"
          onChange={onNameInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <button onClick={onSignIn}>Sign In</button>
      </div>
    </>
  );
}
