import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom'
import { useLogout } from "../../hooks/useLogout";

import "./sidebar.scss";

const Sidebar = () => {

  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Template</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/stacks" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Stacks</span>
            </li>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Projects</span>
            </li>
          </Link>
          <Link to="/contacts" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Contacts</span>
            </li>
          </Link>
          <Link to="/messages" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Messages</span>
            </li>
          </Link>
          <p className="title">ACTIONS</p>
          <li
            onClick={handleClick}
          >
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
