import { Tabs } from 'antd';
import React from 'react';
import { Mision } from '../mision';
import { Plantilla } from '../plantilla';
import TabPane from 'antd/es/tabs/TabPane';
import {Objetivo} from '../objetivo';
import { Vision } from '../vision';
import '../tabs/plantilla.css'
function MenuBar (){
    const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: <span className="label-mision">Misión</span>,
          children:<Mision/>,
        },
        {
          key: '2',
          label: <span className="label-vision">Visión</span>,
          children:<Vision/>,
        },
        {
          key: '3',
          label: <span className="label-objetivos">Objetivos</span>,
          children:<Objetivo/>,
          
        },
        {
          key: '4',
          label: <span className="label-plantilla">Plantilla</span>,
          children:<Plantilla/>,
         
        },

        {
          key: '5',
          label: <span className="label-recreativos">Recreativos</span>,
          
        },
        {
          key: '6',
          label: <span className="label-torneos">Torneos</span>,
          
        },
      ];
    return(
            <Tabs defaultActiveKey="1" items={items} onChange={onChange}>
            {items.map((item)=>(
              <TabPane>
                {item.children}
              </TabPane>
            ))}
           </Tabs>
    );
}
export  {MenuBar};