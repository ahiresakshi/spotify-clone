import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
//import Logo from "./spotify-logo.png";
function Login() {
  //console.log(Logo);
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt="logo-text"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
