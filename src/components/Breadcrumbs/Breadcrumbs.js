import React, {useState} from 'react';
import {Typography, Breadcrumbs} from '@mui/material/';
import {Link} from 'react-router-dom';
import useBreadBrumbs from '../../hooks/useBreanCrumbs';
export default function BasicBreadcrumbs(props) {
  const [breadcrumbs] = useBreadBrumbs();

  return (
    <div
      style={{
        display: 'flex',
        background: '#FAFBFC',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
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
          variant="h4"
          gutterBottom
          component="div"
        >
          {props.title}
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs.map((breadcrumb, index) => {
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
          background: '#FAFBCC',
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
