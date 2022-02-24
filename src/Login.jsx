import React, { useState } from "react";

function Login() {
  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    const inputMail = e.target.name;

    inputMail === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
    setError(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    email === "" && setError(true);
  }

  return (
    <div className="div-main">
      <img className="div-mainimg" src="background.png" alt="tree" />
      <div className="div-form"></div>
      <div className="div-nav"></div>
      <img className="div-navtex" src="amazon.png" alt="logo3" />
      <div className="div-login">Login</div>
      <img className="img-tree" src="tree.png" alt="tree1" />
      <form onSubmit={handleSubmit}>
        <input
          className="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          name="email"
          value={email}
        ></input>

        <div className="border-email"></div>
        {error && (
          <>
            <img className="email-logo" src="Group 2.svg" alt="logo" />
            <div className="email-field">The email field is required</div>
          </>
        )}

        <input
          className="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          name="password"
          value={password}
        />

        <div className="border-password"></div>
        <button className="sign-btn">Sign In</button>

        <div className="div-forget">forgot Password?</div>
        <div className="div-newacc">New User? Sign Up </div>
        <div className="div-or">or</div>
        <div className="div-google"></div>
        <img className="div-googleimg" src="google.png" alt="logo2"></img>
        <div className="div-googletext">CONTINUE WITH GOOGLE</div>
        <div className="div-facebook"></div>
        <img className="div-facebookimg" src="fbook.png" alt="logo5"></img>
        <div className="div-facebooktext">CONTINUE WITH FACEBOOK</div>
      </form>
    </div>
  );
}

export default Login;
