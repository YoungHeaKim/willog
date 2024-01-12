import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Layout } from './styles';

const MainLayout: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
