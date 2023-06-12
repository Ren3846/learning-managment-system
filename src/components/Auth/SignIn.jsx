import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Form, Input, Col, Row, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import signInLogo from '../../assets/sign.jpg';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
const { Title } = Typography;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  return (
    <Row>
      <Col
        xs={24}
        sm={24}
        md={16}
        lg={12}
        xl={12}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#12365b',
          height: '100vh',
        }}>
        {' '}
        <img src={signInLogo} alt="login" height="300px" width="300px" />
      </Col>

      <Col
        span={14}
        style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form
          {...formItemLayout}
          name="register"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            width: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>

          <Form.Item>
            <Title
              level={3}
              style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Вход
            </Title>
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}>
            <Input
              prefix={<UserOutlined />}
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback>
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={() => store.login(email, password)}>
              Войти
            </Button>

            <div style={{ margin: '20px 0px' }}>
              Нет аккаунта? <Link to="/signup">Регистрация</Link>{' '}
            </div>

            <div>
              <br></br>
              Demo credentials:
              <p>username: fakeuser</p>
              <p>password: fakepassword</p>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default observer(SignIn);
