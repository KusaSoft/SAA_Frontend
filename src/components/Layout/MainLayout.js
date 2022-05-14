import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {Box, Button, Chip, IconButton, Typography} from '@mui/material';
import {ClearAll, Menu, AccountCircle} from '@mui/icons-material';
import {
  ContentSite,
  Dashboard,
  LayoutSite,
  Header,
} from './MainLayout.styles';
import useAuth from '../../hooks/useAuth';
import Sidebar from '../Dashboard/Navbar';

function MainLayout() {
  const {auth} = useAuth();
  const [open, setOpen] = useState(true);

  return (
    <body
      style={{
        display: 'flex',
        flexDirection: 'column',
        // margin: 0,
        minHeight: '100%',
        height: '100%',
      }}
    >
      <ContentSite>
        <Dashboard open={open}>
          <Sidebar />
        </Dashboard>
        <LayoutSite>
          <Header>
            <Button
              style={{
                color: '#000000',
                borderColor: '#000000',
                marginLeft: '1rem',
              }}
              variant="outlined"
              startIcon={open ? <ClearAll /> : <Menu />}
              onClick={() => setOpen(!open)}
            />
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                color: 'black',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography variant="body1">{auth.user}</Typography>
                <Chip
                  label={auth.roles[0]}
                  sx={{
                    size: '0.4rem',
                    height: '0.9rem',
                  }}
                  color="navBar"
                />
              </div>

              <AccountCircle
                size="large"
                sx={{
                  marginLeft: '1rem',
                  marginRight: '1rem',
                }}
              />
            </Box>
          </Header>
          <Outlet />
        </LayoutSite>
      </ContentSite>
    </body>
  );
}

export default MainLayout;
