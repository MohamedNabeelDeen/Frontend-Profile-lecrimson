import LoginFB from "./FBAuth";
import GLogin from "./GAuth";
import React, { useState } from "react";

function Loginpage() {
  const [stateAuth, setStateAuth] = useState();
  const response = (res) => {
    setStateAuth(res);

    console.log(stateAuth);
  };

  return (
    <div class="container">
      <div class="login_box">
        <img src={require("./logor.png")} alt="Company Logo" />

        <GLogin response={response} />
        <LoginFB />
      </div>
    </div>
  );
}

export default Loginpage;
