import React from 'react';
import useAuth from '../hooks/useAuth';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {
  ImageContainer,
  MyPaper,
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import background from '../assets/home.jpg';
import backgroundM from '../assets/home-responsive.jpg';
import manual from '../assets/manual.png';
import {Paper, Typography} from '@mui/material';
import {ROLES} from '../services/Constant';

export default function Home() {
  const {auth} = useAuth();

  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="¬°Bienvenido al Sistema de asignacion de aulas!"
          breadcrumbs={[]}
        />
        <div
          style={{
            position: 'relative',
          }}
        >
          <ImageContainer>
            <MyPaper src={background} />
          </ImageContainer>
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: '#263752',
              opacity: '0.5',
              zIndex: '6',
            }}
          />
          <Paper
            elevation={1}
            onClick={() => {
              if (auth.roles[0] === ROLES.ADMIN) {
                window.open(
                  'https://docs.google.com/document/d/1L-xccwphLWX8PyhNUp9EyBQmUB8lnDLXDlsjMt69qIs/edit?usp=sharing'
                );
              } else if (auth.roles[0] === ROLES.TEACHER) {
                window.open(
                  'https://docs.google.com/document/d/16U9GNHYEpnFzxdpOS4kUjZrrMNBX-ePvzHAj5ENwBCw/edit?usp=sharing'
                );
              } else {
                window.open(
                  'https://docs.google.com/document/d/1feCvNgNFIjhvl3GIlTVcLEMW7J0cEujYET8EAl_H66c/edit?usp=sharing'
                );
              }
            }}
            style={{
              position: 'absolute',
              zIndex: '6',
              top: '10px',
              left: '10px',
              minWidth: '180px',
              maxWidth: '180px',
              width: '180px',
              minHeight: '250px',
              height: '250px',
              textAlign: 'center',
              backgroundColor: '#fff',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#5e83ba',
                boxShadow: '0px 0px 10px #000',
                transform: 'scale(1.1)',
              },
            }}
          >
            <img
              src={manual}
              alt="Manual"
              style={{
                width: '100%',
                height: '70%',
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h6"
              style={{
                bottom: '0px',
                left: '0px',
                right: '0px',
                height: '30%',
                textAlign: 'center',
                color: '#fff',
                backgroundColor: '#0E3572',
                padding: '5px',
              }}
            >
              Manual de {auth.roles.length > 0 ? auth.roles[0] : ''}
            </Typography>
          </Paper>
        </div>
      </WrapperPage>
    </WrapperLayout>
  );
}
