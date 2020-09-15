import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import HeaderComp from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function App() {
  return (
      <div className="wraper">
          <Layout >
              <HeaderComp />
              <Layout>
                  <Sidebar />
                  <Layout style={{ padding: '89px 25px 0 225px' }}>
                    <Main />
                  </Layout>
              </Layout>
          </Layout>
      </div>
  );
}

export default App;
