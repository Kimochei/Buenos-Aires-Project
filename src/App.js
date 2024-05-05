import React from 'react';
import { Layout, Menu, Button } from 'antd';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
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
          <Button type="primary">Login</Button>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {/* Header content here */}
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* Main content here */}
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
