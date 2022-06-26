import React from "react";
import { NavLink } from "react-router-dom";

function ProfileBanner(props) {
  let { image, username } = props.user;

  return (
    <section className="profile-hero padding">
      <div className="container ">
        <div className="usr-img">
          <img src={image || "/image/smiley.jpg"} alt="smiley" />
        </div>
        <h1 className="profile-name">{username}</h1>
        <div className="edit-btn">
          <NavLink className="unselected btn" to="/settings">
            <i className="fa fa-cog" aria-hidden="true"></i>&nbsp; Edit Profile
            Settings
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default ProfileBanner;
