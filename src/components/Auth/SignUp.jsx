import React, { useContext, useState } from 'react';

import { Button, Checkbox, Form, Input, Col, Row, Typography } from 'antd';
import signUpLogo from '../../assets/sign.jpg';
import { Link } from 'react-router-dom';
import { Context } from '../../index';

import { UserOutlined, LockOutlined } from '@ant-design/icons';

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

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { store } = useContext(Context);

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
        <img src={signUpLogo} alt="login" height="300px" width="300px" />
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
              Регистрация
            </Title>
          </Form.Item>

          {/* <Form.Item
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
          </Form.Item> */}

          <Form.Item
            label="Имя"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Фамилия"
            name="surname"
            rules={[
              {
                required: true,
                message: 'Please input your surname!',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Подтвердите пароль"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Пароли не совпадают!'));
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}>
            <Checkbox>
              Я согласен с <a href="/">условиями</a>
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => store.registration(email, password)}>
              Регистрация
            </Button>

            <div style={{ margin: '20px 0px' }}>
              Есть аккаунт? <Link to="/signin">Вход</Link>{' '}
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default SignUp;
