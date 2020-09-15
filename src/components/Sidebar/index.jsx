import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, SettingOutlined, DashboardOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const {Sider } = Layout;

function Sidebar() {
    return (
        <Sider width={200} className="site-layout-background"
               style={{ height: '100vh', position: 'fixed', left: 0, top: '64px' }}
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >

                <Menu.Item key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>Users</Menu.Item>
                <Menu.Item key="3" icon={<SettingOutlined />}>Setting</Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Sidebar;
