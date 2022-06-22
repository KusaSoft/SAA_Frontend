import React from 'react';
import useAuth from '../hooks/useAuth';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {
  MyPaper,
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
//import an image
import background from '../assets/home.jpg';
import manual from '../assets/manual.png';
import {Paper, Typography} from '@mui/material';
import {ROLES} from '../services/Constant';

export default function Home() {
  const {auth} = useAuth();

  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="¡Bienvenido al Sistema de asignacion de aulas!"
          breadcrumbs={[]}
        />
        <div
          style={{
            position: 'relative',
          }}
        >
          <MyPaper src={background}></MyPaper>
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
                  'https://drive.google.com/file/d/1VAHj3XyIaPV9DxDzo23BbuvPBlUgWccX/view?usp=sharing'
                );
              } else if (auth.roles[0] === ROLES.TEACHER) {
                window.open(
                  'https://drive.google.com/file/d/1y3ejx-4aqeyuSEHVNYNJ2rowsvpLL7Lv/view?usp=sharing'
                );
              } else {
                window.open(
                  'https://drive.google.com/file/d/1AQUa2MUSaTRHqltfpyuhPj-l_PSRS94E/view?usp=sharing'
                );
              }
            }}
            style={{
              position: 'absolute',
              zIndex: '6',
              top: '50px',
              left: '50px',
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
