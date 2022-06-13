import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/userContext";

function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="flex jc-between al-center">
          <h2 className="logo">conduit</h2>
          <nav>
            {props.isLoggedIn ? (
              <AuthHeader user={props.user} />
            ) : (
              <NonAuthHeader />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

function NonAuthHeader() {
  return (
    <ul className="flex jc-between al-center">
      <li>
        <NavLink
          className={(isActive) =>
            "active-nav" + (!isActive ? " unselected" : "")
          }
          to="/"
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(isActive) =>
            "active-nav" + (!isActive ? " unselected" : "")
          }
          to="/signin"
        >
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(isActive) =>
            "active-nav" + (!isActive ? " unselected" : "")
          }
          to="/signup"
        >
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
}

function AuthHeader(props) {
  // let userData = useContext(UserContext);

  // let { user } = userData.data;
  return (
    <ul className="flex jc-between al-center">
      <li>
        <NavLink
          className={(isActive) =>
            "active-nav" + (!isActive ? " unselected" : "")
          }
          to="/"
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(isActive) =>
            "active-nav" + (!isActive ? " unselected" : "")
          }
          to="/new-post"
        >
          New Article
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(isActive) =>
            "active-nav" + (!isActive ? " unselected" : "")
          }
          to="/settings"
        >
          Settings
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(isActive) =>
            "active-nav" + (!isActive ? " unselected" : "")
          }
          to={`/profiles/${props.user.username}`}
        >
          Profile
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;
