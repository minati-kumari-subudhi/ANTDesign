import React from 'react';
import { Avatar, Breadcrumb, Layout,Menu,Row, Col } from 'antd';
import './App.css';
import { Typography } from 'antd'; 
import {UserOutlined,MailOutlined, ContactsOutlined } from '@ant-design/icons';
import SubMenu from 'antd/es/menu/SubMenu';
  

const {Title} = Typography;
const { Header, Sider, Content, Footer } = Layout;

function App() {
  return (
    <div classname="App">
     
     <Layout>
        <Header style={{padding:10}}>
          <Avatar style={{float:'right'}} icon={<UserOutlined/>} />
          <Title style={{color:'white', marginTop:7}} level={3}> MKS</Title>
        </Header>
      <Layout>
        <Sider  style={{background:'red'}}>
          <Menu defaultSelectedKeys={['Dashboard']}
                mode='inline'>
              <Menu.Item key='Dashboard'>
                 Dashboard
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <ContactsOutlined />
                    <span>Contact Us</span>
                  </span>
                }
                >
                <Menu.ItemGroup key='Contact Us' title="Country 1">
                    <Menu.Item key='Location1'>Location 1</Menu.Item>
                    <Menu.Item key='Location2'>Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <MailOutlined/>
                    <span>About Us</span>
                  </span>
                }
                >
                <Menu.ItemGroup key='About Us' title="Name">
                    <Menu.Item key='Name1'>Locatio 1</Menu.Item>
                    <Menu.Item key='Name2'>Locatio 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
          </Menu>
  
        </Sider>
      <Layout>
        <Content style={{padding:'0 50px'}}>
          <Breadcrumb style={{margin:'16px 0'}}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <h2>Content</h2>
          <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            Column 1
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            Column 2
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            Column 3
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            Column 4
          </div>
        </Col>
      </Row>
      </div>       
       </Content>
        <Footer style={{textAlign:'center'}}>Ant Design Creted by Minati </Footer>
      </Layout>
      </Layout>
      </Layout>
    </div>
  );
};  
 export default App   
     