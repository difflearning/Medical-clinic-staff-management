import { useState } from 'react'
import { Badge, Button, Card, Col, Flex, Input, Layout, Row, Space } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { ArrowUpOutlined, BellOutlined, MenuOutlined, RobotOutlined, SearchOutlined } from '@ant-design/icons';
import Logo from './components/Logo/Logo'
import SideMenu from './components/Menu/SideMenu.jsx';
import StatCard from './components/Card/StatCard.jsx';
import UserTypesChart from './components/UserTypes/UserTypesChart.jsx';

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

                          <Space direction="vertical" size={12} style={{ width: '100%' }}>
                <Header style={{border:'1px dashed red',margin:0,padding:10,display:'flex',alignItems:'center',borderRadius:7,backgroundColor:'white',minHeight:30}}>
                    <h1 style={{fontSize:25,flex:1,margin:0}}>Rota</h1>
                    <BellOutlined  style={{color:'grey',fontSize:25,backgroundColor:'var(--primary-100)',margin:5,padding:4,borderRadius:7}}  />
                    <Button  type="primary" icon={<RobotOutlined />}  style={{backgroundColor:'var(--primary-300)'}}>AI Assistant</Button>
            
                </Header>
                <Content>

                  <Space direction="vertical" size={12} style={{ width: '100%' }}>
                    <Row  gutter={[7,16]}>
                        <Col span={6} sm={24} xs={24} lg={6}>
                            <StatCard name="Total Shifts" number="36" percentage={30.00}  />
                        </Col>
                        <Col span={6}  sm={24} xs={24} lg={6}>
                            <StatCard name="Total Hours" number="124" percentage={30.00}  />
                        </Col>
                        <Col span={6} sm={24} xs={24} lg={6}>
                            <StatCard name="Fill Rate" number="56%" percentage="00.00"  />
                        </Col>
                        <Col span={6} sm={24} xs={24} lg={6}>
                            <StatCard name="Sickness Rate" number="3%" percentage="00.00"  />
                        </Col>
            
                    </Row>
                    <Row gutter={[7,16]}>
                        <Col span={13}>
            
                          <Card>
                            <div>
                              <h4>User types in each department split by rank</h4>
            
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
                                                                      4.5%
                                                                    </div>
                            </div>
                            <UserTypesChart/>
                          </Card>
                        </Col>
                        <Col span={11}>
            
                            <Card>B</Card>
                        </Col>
                    </Row>

                    </Space>
                </Content>

                        </Space>
            </Layout>

    
  
      </Layout> 
    </>
  )
}

export default App
