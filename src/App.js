import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import './App.css';

import RegistrationForm from './Components/pages/registrationpage/RegistrationForm';
import LoginForm from './Components/pages/loginpage/LoginForm'; 
import EventVenues from './Components/pages/eventvenuespage/EventVenues';
import EventSchedule from './Components/pages/eventschedule/Calendar';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [showRegForm, setShowRegForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false); 
  const [showEventVenues, setShowEventVenues] = useState(false); 
  const [showEventSchedule, setShowEventSchedule] = useState(false);

  const handleRegisterClick = () => {
    setShowRegForm(true);
    setShowLoginForm(false);
    setShowEventVenues(false); 
    setShowEventSchedule(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegForm(false);
    setShowEventVenues(false); 
    setShowEventSchedule(false);
  };

  const handleEventVenuesClick = () => {
    setShowEventVenues(true); 
    setShowRegForm(false);
    setShowLoginForm(false);
    setShowEventSchedule(false);
  };

  const handleEventScheduleClick = () => {
    setShowEventVenues(false); 
    setShowRegForm(false);
    setShowLoginForm(false);
    setShowEventSchedule(true);
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
          <Button type="primary" onClick={handleEventScheduleClick}>Event Schedule</Button>
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
            {showLoginForm && <LoginForm />} 
            {showEventVenues && <EventVenues />} 
            {showEventSchedule && <EventSchedule />}
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
