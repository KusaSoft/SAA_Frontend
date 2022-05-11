import React, {useState} from 'react';
import {Typography, Breadcrumbs} from '@mui/material/';
import {Link} from 'react-router-dom';
import {Home} from '@mui/icons-material';
export default function BasicBreadcrumbs(props) {
  return (
    <div
      style={{
        display: 'flex',
        background: '#FAFBFC',
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: '0.8rem',
        borderBottom: '3px solid #E0E0E0',
      }}
    >
      <div
        style={{
          background: '#FAFBFC',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          color="text.primary"
          variant="h5"
          gutterBottom
          component="div"
        >
          {props.title}
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            key={'999'}
            to={'/user/home'}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Home />
            Inicio
          </Link>
          {props.breadcrumbs.map((breadcrumb, index) => {
            return breadcrumb.link ? (
              <Link key={index} to={breadcrumb.route}>
                {breadcrumb.name}
              </Link>
            ) : (
              <Typography key={index} color="text.primary">
                {breadcrumb.name}
              </Typography>
            );
          })}
        </Breadcrumbs>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
