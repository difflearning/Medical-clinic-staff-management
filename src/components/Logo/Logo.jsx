import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import './Logo.css';  // import your CSS

const Logo = () => {
  return (
    <div className="app-logo">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <h3>iQram</h3>
      </div>
      <MenuOutlined className='menu-icon' />
    </div>
  );
};

export default Logo;