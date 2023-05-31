import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { motion } from 'framer-motion';

import secondCard from '../../assets/sec.jpg';

const { Title, Text } = Typography;

const Tutors = () => {
  return (
    <Row
      id="about"
      justify="center"
      align="middle"
      style={{ height: '100vh', backgroundColor: '#fafafa' }}>
      <Col xs={22} sm={20} md={16} lg={12} xl={20}>
        <Title level={1} style={{ marginBottom: '2rem', textAlign: 'center' }}>
          Учителям
        </Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={14}>
            <motion.div
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.8 }}
              style={{ backgroundColor: '#fff', padding: '4rem' }}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={secondCard}
                  alt="firstCard"
                  height="220px"
                  style={{ fontSize: '4rem', marginBottom: '3rem' }}
                />
                <Title level={4}>Strong Mind</Title>
                <Text>
                  Купив уроки на нашей платформе «Strong Mind» вам предоставляются увлекательные
                  занятия с нашими преподавателями со всего мира, видеоролики, учебные материалы,
                  интерактивные игры самого разного содержания для учащихся с любым уровнем
                  подготовки.
                </Text>
              </div>
            </motion.div>
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button type="primary" shape="round" size="large" className="button" href="/signup">
            Регистрация
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Tutors;
