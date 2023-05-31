import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Button, Form, Input, Col, Row, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import signInLogo from '../../assets/sign.jpg';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = () => {
    if (username === 'fakeuser' && password === 'fakepassword') {
      localStorage.setItem('auth', username);
      navigate('/');
    } else {
      // Настоящий логин
    }
  };

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
                message: 'Please input your name!',
              },
            ]}>
            <Input
              prefix={<UserOutlined />}
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <Button type="primary" htmlType="submit" onClick={signIn}>
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

export default SignIn;
