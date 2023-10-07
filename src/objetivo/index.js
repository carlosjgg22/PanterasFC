import React from 'react';
import { List, Typography } from 'antd';
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Space } from 'antd';
import '../objetivo/objetivo.css'
const data = [
  'Ser un equipo consolidado con fuertes lazos de amistad y cooperación entre todos',
  'Crecer con cada experiencia adquirida al compatir situaciones en el terreno de juego.',
  'Aprender constantemente para ser cada día mejores.',
  'Crear un espacio donde todos nos sitamos cómodos de pertenecer.',
  'Tener la perseverancia de alcanzar logros a nivel competitivo en conjunto como equipo.',
];
const Objetivo = () => (
  <>
    <List 
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item className='objetivo'>
          <Typography.Text >
          <Space>
    <CheckCircleTwoTone twoToneColor="green" className='icon-check'/>
  </Space>
            </Typography.Text> {item}
        </List.Item>
      )}
    />
  </>
);
export {Objetivo}

