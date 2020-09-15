import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';

function HeaderMenu() {
    return (
        <Avatar icon={<UserOutlined />} />
    );
}

export default HeaderMenu;
