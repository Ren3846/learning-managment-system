import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Button } from 'antd';
import englishLessonsImage from '../../assets/icon5.jpg';
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div style={{ maxWidth: 600 }}>
        <Title level={1} style={{ marginBottom: '1rem' }}>
          Английские уроки для каждого!
        </Title>
        <Text style={{ fontSize: '16px' }}>
          Мы подготовили для вас все удобные способы изучения языка
          <br /> <br />
          <CheckCircleOutlined style={{ marginRight: '5px', color: '#000' }} />
          - ОТ 5$ ЗА УРОК
          <br />
          <CheckCircleOutlined style={{ marginRight: '5px', color: '#000' }} />
          - 2 БЕСПЛАТНЫХ УРОКА ДЛЯ ВАС
          <br />
          <CheckCircleOutlined style={{ marginRight: '5px', color: '#000' }} />- УРОКИ ОТ 20 ДО 50
          МИНУТ
        </Text>
        <div style={{ marginTop: '2rem' }}>
          <Button type="primary" shape="round" size="large" className="button" href="/signup">
            Начать уроки <ArrowRightOutlined />
          </Button>
        </div>
      </div>

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        src={englishLessonsImage}
        alt="English Lessons"
        style={{ width: '50%', marginLeft: '2rem' }}
      />
    </motion.div>
  );
}

export default Hero;
