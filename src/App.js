import "./App.css";
import React, { useState } from "react";
import Profile from "./Profile";
import Login from "./Login";
import { LoginContext } from "./LoginContext";
function App() {
  console.log("");
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUserName] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUserName, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
