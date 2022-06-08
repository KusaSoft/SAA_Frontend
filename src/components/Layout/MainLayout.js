import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {Button, Chip, Typography} from '@mui/material';
import {ClearAll, Menu, AccountCircle, Logout} from '@mui/icons-material';
import {
  ContentSite,
  Dashboard,
  LayoutSite,
  Header,
} from './MainLayout.styles';
import useAuth from '../../hooks/useAuth';
import Sidebar from '../Dashboard/Navbar';
import {BoxCenterToEnd, BoxColumn} from '../../emotion/GlobalComponents';
import MenuButton from '../Button/ManuButton';

function MainLayout() {
  const {setAuth} = useAuth();
  const {auth} = useAuth();
  const [open, setOpen] = useState(true);

  return (
    <BoxColumn>
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
              onClick={() => setOpen(!open)}
            >
              {open ? <ClearAll /> : <Menu />}
            </Button>
            <BoxCenterToEnd>
              <BoxColumn>
                <Typography variant="body1">{auth.user}</Typography>
                <Chip
                  label={auth.roles[0]}
                  sx={{
                    size: '0.4rem',
                    height: '0.9rem',
                  }}
                  color="footer"
                />
              </BoxColumn>
              <MenuButton
                buttoms={[
                  {
                    id: '1',
                    onClick: () => {
                      setAuth({
                        user: null,
                        roles: [],
                        token: null,
                        id: null,
                      });
                    },
                    icon: (
                      <Logout
                        sx={{
                          marginRight: '1rem',
                        }}
                      />
                    ),
                    label: 'Cerrar Sesión',
                  },
                ]}
              >
                
              </MenuButton>
            </BoxCenterToEnd>
          </Header>
          <Outlet />
        </LayoutSite>
      </ContentSite>
    </BoxColumn>
  );
}

export default MainLayout;
