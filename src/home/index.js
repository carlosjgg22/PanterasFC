import React from 'react';
import { Layout, Space } from 'antd';
import {LabelMensaje}from '../label'
import {Social} from '../social/index'; 
import {MenuBar} from '../tabs/index';


const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: 'left',
  color: '#fff',
  height: 150,
  paddingInline:0,
  lineHeight: '64px',
  backgroundColor: 'black',

  
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '700px',
  color: '#fff',
  backgroundColor: 'black',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'Black',
  height: 180,
  paddingInline:0,
};
const Home = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}><LabelMensaje/></Header>
      <Content style={contentStyle}><MenuBar/></Content>
      <Footer style={footerStyle}><Social/></Footer>
    </Layout>
  </Space>
);
export {Home};