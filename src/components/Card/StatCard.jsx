


import { ArrowUpOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'

export default function StatCard({name,number,percentage}) {
  return (
  

                                <Card   style={{
    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))',
  }} > 
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

                                  <div>
                                      <h4 style={{margin:0}}>{name}</h4>
                                      <span>{number}</span>
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
                                        {percentage}%
                                      </div>
                                                                      </div>

                            </Card>
  )
}
