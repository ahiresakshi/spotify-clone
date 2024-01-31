import React from "react";
import "./Footer.css";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { IoShuffle } from "react-icons/io5";
import { IoIosRepeat } from "react-icons/io";
import { MdPlaylistPlay } from "react-icons/md";
import { FaVolumeDown } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src="https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="footer_songImfo">
          <h4>Yeah!</h4>
          <p>Saki</p>
        </div>
      </div>
      <div className="footer_center">
        <IoShuffle className="footer_green" />
        <BiSkipPrevious className="footer_icon" />
        <IoPlayCircleOutline fontSize="large" className="footer_icon" />
        <BiSkipNext className="footer_icon" />
        <IoIosRepeat className="footer_green" />
      </div>
      <div className="footer_right">
        <MdPlaylistPlay />

        <FaVolumeDown />

        <FaSlidersH />
      </div>
    </div>
  );
}

export default Footer;
