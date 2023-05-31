import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Menu, Col, Space, Button, Typography } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  UserOutlined,
  MailOutlined,
  LoginOutlined,
  UserAddOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Col span={4}>
          <Typography.Text italic style={{ color: 'white' }}>
            STRONG MIND ACADEMY
          </Typography.Text>
        </Col>
        <Col span={12}>
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={['home']}
            style={{ flexGrow: 1 }}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              Главная
            </Menu.Item>
            <Menu.Item key="about" icon={<InfoCircleOutlined />}>
              Про нас
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              Учителям
            </Menu.Item>
            <Menu.Item key="contact" icon={<MailOutlined />}>
              Контакты
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>
          <Space>
            <Button type="primary" href="/signin" icon={<LoginOutlined />}>
              Войти
            </Button>
            <Button type="default" href="/signup" icon={<UserAddOutlined />}>
              Регистрация
            </Button>
          </Space>
        </Col>
        <Col span={4}>
          <div className="social-icons">
            <Link href="#" target="_blank">
              <InstagramOutlined />
            </Link>
            <Link href="#" target="_blank">
              <TwitterOutlined />
            </Link>
            <Link href="#" target="_blank">
              <FacebookOutlined />
            </Link>
          </div>
        </Col>
      </motion.div>
    </Header>
  );
}

export default AppHeader;
