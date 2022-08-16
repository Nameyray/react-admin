import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import "./navbar.scss";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {

  const { user } = useAuthContext()

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search ......" />
          <SearchIcon />
        </div>
        <div className="items">

          {
            user &&
            (
              <div className="item">
                <span className="userEmail">{user.email}</span>
              </div>
            )
          }

          {
            !user &&
            (
              <div>
                <Link to="/login">
                  <div className="item">
                    Login
                  </div>
                </Link>
                <Link to="/register">
                  <div className="item">
                    Register
                  </div>
                </Link>
              </div>
            )
          }

          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
