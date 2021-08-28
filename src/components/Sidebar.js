import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5616AQHx9Zsvb4QDUQ/profile-displaybackgroundimage-shrink_350_1400/0/1624743388138?e=1635379200&v=beta&t=A2yYz3Lg5A5GipPQLHUzENdVen1-2U3fjCFdbvXdXlI"
          alt="background-image"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Hamza Hassan</h2>
        <h4>hamza.hassan00321@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">86</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="sidebar__statNumber">88</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("desing")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;