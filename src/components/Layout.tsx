import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="layout-content" style={{ paddingTop: '70px' }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
