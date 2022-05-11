import React from 'react';
import useAuth from '../hooks/useAuth';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
export default function Home() {
  const {auth} = useAuth();

  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="¡Bienvenido al Sistema de asignacion de aulas!"
          breadcrumbs={[]}
        />
      </WrapperPage>
    </WrapperLayout>
  );
}
