import { Card, Col, Row  } from 'antd';
import imagealex from '../plantilla/img-alex.jpg'
import imagecarlos from '../plantilla/img-carlos.jpg'
import imagemaxi from '../plantilla/img-maxi.jpg'
import imagemilton from '../plantilla/img-milton.jpg'
import  '../plantilla/plantilla.css'

function Plantilla(){
const { Meta } = Card;
//se puede sacar de esta clase y armar la data en otra
const data = [
    {
      imageURL: imagealex,
      nombre: 'Alex',
      description: 'Delantero',
      numero:'12'
    },
    {
      imageURL: imagemilton,
      nombre: 'Milton',
      description: 'Defensa',
      numero:'12'
    },
    {
        imageURL: imagecarlos,
        nombre: 'Pollo',
        description: 'Defensa',
        numero:'12'
      },
      {
        imageURL: imagemaxi,
        nombre: 'Maxi',
        description: 'Defensa',
        numero:'12'
      },
  ];
return(
<>
<Row>
    {data.map((item, index)=>(
        <Col >
            <Card
                hoverable
                style={{
                width: 240,
                margin: '10px 5px',  
                }}
    cover={<img alt="example" src={item.imageURL} />}>
    <Meta title={item.description} description={item.nombre} className='info-jugador'/>
    <p className='numero'>{item.numero}</p>
            </Card>
        </Col>
    ))}
</Row>
</>
);}

export {Plantilla};