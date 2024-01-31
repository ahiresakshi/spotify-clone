import React from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { useDataLayerValue } from "./DataLayer";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <CiSearch />
        <input
          placeholder="Search for Artists, Songs and Melodies"
          text="text"
        ></input>
      </div>
      <div className="header_right">
        <RxAvatar />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
