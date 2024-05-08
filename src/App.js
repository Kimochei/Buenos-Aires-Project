import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import './App.css';

import RegistrationForm from './Components/pages/registrationpage/RegistrationForm';
import loginForm from './Components/pages/loginpage/loginForm'; 
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [showRegForm, setShowRegForm] = useState(false);
  const [showloginForm, setShowloginForm] = useState(false); 

  const handleRegisterClick = () => {
    setShowRegForm(true);
    setShowloginForm(false); 
  };

  const handleLoginClick = () => {
    setShowloginForm(true);
    setShowRegForm(false); 
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {/* Add your navigation items here */}
        </Menu>
        <div className="sidebar-buttons">
          <Button type="primary">Home</Button>
          <Button type="primary">Event Schedule</Button>
          <Button type="primary">Event Venues</Button>
          <Button type="primary" onClick={handleLoginClick}>Login</Button> {/* Add onClick handler */}
          <Button type="primary" onClick={handleRegisterClick}>Registration</Button>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {/* Header content here */}
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {showRegForm && <RegistrationForm />}
            {showloginForm && <loginForm />} {/* Render loginForm */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          {/* Footer content here */}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
