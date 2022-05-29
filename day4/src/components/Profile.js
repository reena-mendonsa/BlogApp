// import ProfileHero from "./ProfileHero";
import ProfileNav from "./ProfileNav";
import React from "react";

function Profile(props) {
  return (
    <React.Fragment>
      {/* <ProfileHero user={props.user} /> */}
      <ProfileNav user={props.user} />
    </React.Fragment>
  );
}

export default Profile;
