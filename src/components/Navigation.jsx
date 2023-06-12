import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  LogoutOutlined,
  CalendarOutlined,
  ReadOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';
const { Sider } = Layout;

const Nav = () => {
  const location = useLocation();

  return (
    <Layout>
      <Sider trigger={null} style={{ height: '100vh' }}>
        <div className="demo-logo-vertical">
          {/* <img src="./favicon.png" alt="Logo" width={'50px'} /> */}
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
          <Menu.Item key="/account" icon={<UserOutlined />}>
            <NavLink to="/account">Аккаунт</NavLink>
          </Menu.Item>
          <Menu.Item key="/dashboard" icon={<HomeOutlined />}>
            <NavLink to="/dashboard">Дашборд</NavLink>
          </Menu.Item>
          <Menu.Item key="/courses" icon={<ReadOutlined />}>
            <NavLink to="/courses">Курсы</NavLink>
          </Menu.Item>
          <Menu.Item key="/calendar" icon={<CalendarOutlined />}>
            <NavLink to="/calendar">Календарь</NavLink>
          </Menu.Item>
          <Menu.Item key="/connect" icon={<QuestionCircleOutlined />}>
            <NavLink to="/connect">Помощь</NavLink>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              //   Auth.signOut();
              //   window.location.reload();
              //   localStorage.removeItem('auth');
              //   window.location.href = '/';
            }}
            key="/logout"
            icon={<LogoutOutlined />}>
            <NavLink to="/">Выйти</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Nav;
