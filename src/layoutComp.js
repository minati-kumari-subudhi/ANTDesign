import React from 'react'
import { Layout } from 'antd'; 
import {  Flex } from 'antd';

  
const { Header, Footer, Sider, Content } = Layout; 
  
 function LayComp() { 
  
  return ( 
     <>
      <h4>ReactJS Ant-Design Layout Component</h4> 
      <Flex gap="small" align="center" wrap="wrap">
        <Layout> 
          <Sider style={{ backgroundColor: 'grey' }}> 
            Sample Sider 
          </Sider> 
          <Layout style={{ backgroundColor: 'lightblue' }}> 
            <Header style={{ backgroundColor: 'green' }}> 
              Sample Header 
            </Header> 
            <Content style={{ backgroundColor: 'yellow' }}> 
              Sample Content 
            </Content> 
            <Footer style={{ backgroundColor: 'green' }}> 
              Sample Footer 
            </Footer> 
          </Layout> 
        </Layout> 
    </Flex>
      </> 
    );
};

export default LayComp