import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <div className={`ui inverted blue menu navbar`}>
      <a className="item">
        <h2 className="ui header">
          <i className={`users icon`} />
          <div className="content">Mentor Matchup</div>
          <div className="sub header">Matching mentors and mentees since 2018</div>
        </h2>
      </a>
      <NavLink id="nav-item"
        exact
        to="/"
        className="ui item"
        activeClassName="ui active item"
      >
        Home
      </NavLink>
      <NavLink id="nav-item"
        exact
        to="/login"
        className="ui item"
        activeClassName="ui active item"
      >
        Login
      </NavLink>
      {props.user && props.user.type_of === "mentee" ? <NavLink id="nav-item"
        exact
        to="/mentors"
        className="ui item"
        activeClassName="ui active item"
      >
        Mentors
      </NavLink> : null}
      {props.user ? <NavLink id="nav-item"
        exact
        to="/profile"
        className="ui item"
        activeClassName="ui active item"
      >
        Profile
      </NavLink> : null}

    </div>
  );
};

export default NavBar;
