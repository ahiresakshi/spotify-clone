import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdLibraryMusic } from "react-icons/md";
import { useDataLayerValue } from "./DataLayer";
function Sidebar() {
  //   const [{ playlists }, dispatch] = useDataLayerValue();
  //   console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt="sidebarl"
      ></img>

      <SidebarOption Icon={IoHomeOutline} title="Home" />

      <SidebarOption Icon={CiSearch} title="Search" />
      <SidebarOption Icon={MdLibraryMusic} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))} */}
      <SidebarOption title="Raabta" />
      <SidebarOption title="Jalebi" />
      <SidebarOption title="Teri Ore" />
      <SidebarOption title="Chamak Challo" />
    </div>
  );
}

export default Sidebar;
