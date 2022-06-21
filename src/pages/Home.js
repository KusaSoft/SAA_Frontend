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
              zIndex: '9',
            }}
          />
          <Paper
            elevation={3}
            onClick={() => {
              //navigate to manial link
              window.open(
                'https://docs.google.com/document/d/1L-xccwphLWX8PyhNUp9EyBQmUB8lnDLXDlsjMt69qIs/edit',
                '_blank'
              );
            }}
            style={{
              position: 'absolute',
              zIndex: '19',
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
