import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import LogoFCyT from '../../assets/fcyt.png';
import LogoUMSS from '../../assets/umss.png';
import LogoKusaSoft from '../../assets/kusasoft.png';
function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        fontSize: '0.8rem',
        bottom: 1,
        width: '100%',
        backgroundColor: 'footer.main',
        color: 'footer.contrastText',
        position: 'fixed',
        zIndex: '30',
      }}
    >
      <Divider
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          flexDirection: 'column',
          fontSize: '0.8rem',
          position: 'absolute',
          bottom: 1,
          width: '100%',
        }}
      />
      <Stack
        sx={{
          mb: 1,
        }}
        direction="row"
        spacing={1}
        padding="1rem 0 0"
      >
        <Box
          component="img"
          sx={{
            width: 60,
            maxWidth: {xs: 60, md: 60},
          }}
          alt="logo fcyt."
          src={LogoFCyT}
        />
        <Box
          component="img"
          sx={{
            minWidth: 120,
            minHeight: 50,
            maxWidth: {xs: 120, ys: 50},
          }}
          alt="logo fcyt."
          src={LogoUMSS}
        />
        <Box
          component="img"
          sx={{
            width: 60,
            maxWidth: {xs: 60, md: 60},
          }}
          alt="logo fcyt."
          src={LogoKusaSoft}
        />
      </Stack>
      <Box
        sx={{
          fontSize: '0.8rem',
          paddingBottom: '1rem',
        }}
      >
        © {new Date().getFullYear()}, Desarrollado por kusaSoft.
      </Box>
    </Box>
  );
}

export default Footer;
