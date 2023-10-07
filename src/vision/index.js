import React from 'react';
import {List, Typography } from 'antd';
import { StarTwoTone} from '@ant-design/icons';
import { Space } from 'antd';
import '../mision/mision.css'
import '../vision/vision.css'
import imagenVision from '../plantilla/football_field_ball_football_212178_1280x720.jpg'

const data = [
  'Representar a Panteras FC en un torneo a Nivel Mundial.',
  'Destacar a Nivel Nacional en la disciplina de Futbol.',
  'Ser un Equipo competitivo que de el todo por el todo por ser cada día mejor y superarse',
  'Tener un espacio que genere seguridad para cada uno de nuestros miembros del equipo',
  'Alcanzar todas las metas que nos propongamos como equipo en el ámbito futbolístico.',
];
const Vision = () => (
  <>
  {/* <div>
    <img class="imagenBalon" src={imagenVision} alt="imagenVision"  width="900" height="700"/>
</div>  */}
    <List
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item className='vision'>
          <Typography.Text >
          <Space>
            <StarTwoTone twoToneColor="gold" className='icon-start' />
          </Space>
          </Typography.Text>{item}
          </List.Item>
      )}
    />
  </>
);
export {Vision}