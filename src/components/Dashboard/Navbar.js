import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {SidebarData, HomeItem} from './SidebarData';
import useAuth from '../../hooks/useAuth';
import {Box, Divider, Button} from '@mui/material';
import LogoFCyT from '../../assets/fcyt.png';
import {Logout} from '@mui/icons-material';
// import Button from '../../components/Button/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  const {setAuth} = useAuth();
  const {auth} = useAuth();

  return (
    <div className="nav_container">
      <div className="nav_content">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            sx={{
              width: 120,
              maxWidth: {xs: 120, md: 120},
              display: 'flex',
            }}
            alt="logo fcyt."
            src={LogoFCyT}
          />
          <Divider />
          <ul className={'sidebar-items'}>
            <li key={HomeItem.id} className={HomeItem.cName}>
              <Link to={HomeItem.path}>
                {HomeItem.icon}
                <span>{HomeItem.title}</span>
              </Link>
            </li>
            {SidebarData(auth.roles[0]).map((sidebarItem) => {
              return sidebarItem.hasSubmenu ? (
                <Box>
                  <Accordion
                    sx={{
                      backgroundColor: 'navBar.main',
                      color: 'navBar.contrastText',
                      boxShadow: 'none',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{sidebarItem.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        {sidebarItem.elements.map((element) => {
                          return (
                            <li className="sidebar-item">
                              <Link to={element.path}>
                                {element.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ) : (
                <li key={sidebarItem.id} className={sidebarItem.cName}>
                  <Link to={sidebarItem.path}>
                    {sidebarItem.icon}
                    <span>{sidebarItem.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Box>
        <Box>
          <Divider
            style={{
              color: 'white',
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              setAuth({
                user: null,
                roles: [],
                token: null,
                id: null,
              });
            }}
            color="navBar"
            sx={{boxShadow: 'none'}}
          >
            <Logout
              sx={{
                marginRight: '1rem',
              }}
            />
            Cerrar Sesión
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Sidebar;
