import ProfileNav from "./ProfileNav";
import React from "react";

function Profile(props) {
  return (
    <React.Fragment>
      <ProfileNav user={props.user} />
    </React.Fragment>
  );
}

export default Profile;
