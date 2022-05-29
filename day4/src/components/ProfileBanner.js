import React from "react";
import { NavLink } from "react-router-dom";

function ProfileBanner(props) {
  let { image, username } = props.user;
  return (
    <section className="profile-hero padding">
      <div className="cotainer ">
        <img src={image || "/image/smiley.jpg"} alt="smiley" />
        <h1 className="profile-name">{username}</h1>
        <div className="follow-btn profile-btn">
          <p>
            +Follow <span>{username}</span>
          </p>
        </div>
        <NavLink className="unselected btn" to="/settings">
          <i className="fa fa-cog" aria-hidden="true"></i>&nbsp; Edit Profile
          Settings
        </NavLink>
      </div>
    </section>
  );
}

export default ProfileBanner;
