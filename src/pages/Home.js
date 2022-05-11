import React from 'react';
import useStatusList from '../hooks/useStatusList';
import {STATUS} from '../services/Constant';
import useAuth from '../hooks/useAuth';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

export default function Home() {
  const {auth} = useAuth();

  return (
    <div
      style={{
        background: '#FAFBFC',
        flex: '1',
        width: '100%',
        height: '100%',
        minHeight: '95vh',
      }}
    >
      <BasicBreadcrumbs title="Bienvenido"></BasicBreadcrumbs>
    </div>
  );
}
