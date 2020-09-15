import React from 'react';
import Logo from '../../logo.svg';
import NotificationIcon from '../../assets/notification.svg';

import {Layout, Menu, Col, Row, Avatar, Typography, Badge} from 'antd';
import {UserOutlined, NotificationOutlined} from "@ant-design/icons";
const { Header } = Layout;
const { Text, Link } = Typography;

function HeaderComp() {
    return (
        <Header className="header"
                style={{ height: '64px', position: 'fixed', zIndex: 1, width: '100%' }}>
            <Row>
                <Col align="left" span={12}><img width={70} height={70} src={Logo} alt=""/></Col>
                <Col align="right" span={12}>
                    <Badge count={2} style={{margin: "0 30px 0 0", color: "#fff"}}>
                        <img width={30} height={30} src={NotificationIcon} alt=""/>
                    </Badge>
                    <Avatar icon={<UserOutlined />} />
                    <Text style={{color: "#fff", padding: "0 0 0 10px"}} >L. Kostiantyn</Text>
                </Col>
            </Row>
        </Header>
    );
}

export default HeaderComp;
