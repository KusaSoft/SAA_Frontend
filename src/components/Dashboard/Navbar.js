import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { height } from "@mui/system";
import useAuth from "../../hooks/useAuth";



function Navbar() {
  const { setAuth } = useAuth();
  const { auth } = useAuth();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return auth.user ? (
    <>
      <div className="navbar">
        <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
          <MenuIcon  />
        </Link>
        <p style={{color:"white", position:"absolute", right:"100px"}}>{auth.user}</p>
        <AccountCircleIcon sx={{color:"white", marginRight:"2rem" }}  />
      </div>
      <div
        className={sidebar ? "sidebar-container active" : "sidebar-container"}
      >
        <ul className="sidebar-items">
          <li className="sidebar-toggle">
            <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
              <MenuIcon />
              {/* <FaIcons.FaWindowClose /> */}
            </Link>
          </li>
          <li>
            <button
              className="sidebar-logout"
              onClick={() => {
                setAuth({
                  user: null,
                  roles: [],
                  token: null,
                });
              }}
            >
              Cerrar Sesión
            </button>
          </li>
          {SidebarData.map((sidebaritem) => {
            return (
              <li
                key={sidebaritem.id}
                className={sidebaritem.cName}
                onClick={showSidebar}
              >
                <Link to={sidebaritem.path}>
                  {sidebaritem.icon}
                  <span>{sidebaritem.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Navbar;
