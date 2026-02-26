import { useState } from 'react'
import { Badge, Button, Card, Col, Flex, Input, Layout, Row, Space } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { ArrowUpOutlined, BellOutlined, MenuOutlined, RobotOutlined, SearchOutlined } from '@ant-design/icons';
import Logo from './components/Logo/Logo'
import SideMenu from './components/Menu/SideMenu.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
      <Layout style={{padding:1}}>

          <Sider   
          
            width={240}
            //breakpoint="lg"       // collapse below large screens
            //collapsedWidth={80}   // width when collapsed
          style={{padding:10,margin:'10px 15px 0 20px',borderRadius:10,backgroundColor:'white',minHeight:'100vh'}} >
                  
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Logo/>
                  <Input  placeholder='Search' prefix={<SearchOutlined/>} style={{fontSize:16}}/>
                  <SideMenu/>
                </div>
          </Sider>
          
          <Layout style={{margin:'10px 0 0 0'}}>
              <Header style={{border:'1px dashed red',margin:0,padding:10,display:'flex',alignItems:'center',borderRadius:7,backgroundColor:'white',minHeight:30}}>

                  <h1 style={{fontSize:25,flex:1,margin:0}}>Rota</h1>

                  <BellOutlined  style={{color:'grey',fontSize:25,backgroundColor:'var(--primary-100)',margin:5,padding:4,borderRadius:7}}  />
                  <Button  type="primary" icon={<RobotOutlined />}  style={{backgroundColor:'var(--primary-300)'}}>AI Assistant</Button>
                  
              </Header>
              <Content>

                  <Row  gutter={[7,16]}>

                      <Col span={6}>
                            <Card className={{shad}}>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

                                  <div>
                                      <h4 style={{margin:0}}>Total Shifts</h4>
                                      <span>17</span>
                                  </div>

                                   <div
                                        style={{
                                          display: 'inline-flex',
                                          alignItems: 'center',
                                          gap: 6,
                                          padding: '2px 6px',
                                          borderRadius: 6,
                                          backgroundColor: 'var(--color-success-bg)',
                         
                                          fontSize: 12,
                                          fontWeight: 500,
                                          color:'green'
                                        }}
                                      >
                                        <ArrowUpOutlined />
                                        00%
                                      </div>
                                                                      </div>

                            </Card>
                      </Col>
                      <Col span={6}>
                            <Card>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

                                  <div>
                                      <h4 style={{margin:0}}>Total Shifts</h4>
                                      <span>17</span>
                                  </div>

                                   <div
                                        style={{
                                          display: 'inline-flex',
                                          alignItems: 'center',
                                          gap: 6,
                                          padding: '2px 6px',
                                          borderRadius: 6,
                                          backgroundColor: 'var(--color-success-bg)',
                         
                                          fontSize: 12,
                                          fontWeight: 500,
                                          color:'green'
                                        }}
                                      >
                                        <ArrowUpOutlined />
                                        00%
                                      </div>
                                                                      </div>

                            </Card>
                      </Col>
                      <Col span={6}>
                            <Card>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

                                  <div>
                                      <h4 style={{margin:0}}>Total Shifts</h4>
                                      <span>17</span>
                                  </div>

                                   <div
                                        style={{
                                          display: 'inline-flex',
                                          alignItems: 'center',
                                          gap: 6,
                                          padding: '2px 6px',
                                          borderRadius: 6,
                                          backgroundColor: 'var(--color-success-bg)',
                         
                                          fontSize: 12,
                                          fontWeight: 500,
                                          color:'green'
                                        }}
                                      >
                                        <ArrowUpOutlined />
                                        00%
                                      </div>
                                                                      </div>

                            </Card>
                      </Col>
                      <Col span={6}>
                            <Card>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

                                  <div>
                                      <h4 style={{margin:0}}>Total Shifts</h4>
                                      <span>17</span>
                                  </div>

                                   <div
                                        style={{
                                          display: 'inline-flex',
                                          alignItems: 'center',
                                          gap: 6,
                                          padding: '2px 6px',
                                          borderRadius: 6,
                                          backgroundColor: 'var(--color-success-bg)',
                         
                                          fontSize: 12,
                                          fontWeight: 500,
                                          color:'green'
                                        }}
                                      >
                                        <ArrowUpOutlined />
                                        00%
                                      </div>
                                                                      </div>

                            </Card>
                      </Col>
                  </Row>
              </Content>

          </Layout>
      </Layout>
    </>
  )
}

export default App
