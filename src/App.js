import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import './App.css';

import RegistrationForm from './Components/pages/registrationpage/RegistrationForm';
import LoginForm from './Components/pages/loginpage/LoginForm'; // Ensure the component name starts with a capital letter
import EventVenues from './Components/pages/eventvenues/EventVenues'; // Import your EventVenues component

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [showRegForm, setShowRegForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false); 
  const [showEventVenues, setShowEventVenues] = useState(false); // New state for Event Venues

  const handleRegisterClick = () => {
    setShowRegForm(true);
    setShowLoginForm(false);
    setShowEventVenues(false); // Hide Event Venues when other buttons are clicked
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegForm(false);
    setShowEventVenues(false); // Hide Event Venues when other buttons are clicked
  };

  const handleEventVenuesClick = () => {
    setShowEventVenues(true); // Show Event Venues when the button is clicked
    setShowRegForm(false);
    setShowLoginForm(false);
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
          <Button type="primary" onClick={handleEventVenuesClick}>Event Venues</Button>
          <Button type="primary" onClick={handleLoginClick}>Login</Button>
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
            {showLoginForm && <LoginForm />} {/* Render LoginForm */}
            {showEventVenues && <EventVenues />} {/* Render EventVenues */}
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
