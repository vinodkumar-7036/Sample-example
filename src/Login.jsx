import React, { useContext } from "react";
import { LoginContext } from "./LoginContext";

function Login() {
  const { setUserName, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <input type="text" placeholder="Password" />
      </div>
      <button onClick={setShowProfile(true)}>LogIn</button>

      {/* {showProfile && <h1>{userName}</h1>} */}
    </>
  );
}
export default Login;
