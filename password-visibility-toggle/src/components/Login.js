import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Login.scss";
function Login() {
  const [toggleIcon, setToggleIcon] = useState(true);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <>
      <section className="login --100vh --center-all">
        <div className="--card --bg-light">
          <h2>Login</h2>
          <div className="--form-control">
            <input className="--width-100" type="text" placeholder="Username" />
            <div className="password">
              <input className="--width-100" type={toggleIcon ? "password" : "text"} placeholder="Password" />
              <div className="icon" onClick={handleToggleIcon}>
                {toggleIcon ? <AiOutlineEye size={24} /> : <AiOutlineEyeInvisible size={24} />}
              </div>
            </div>
            <button className="--btn --btn-success --btn-block">Login</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
