import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Badge, Col, Progress, Row, Space } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

ChartJS.register(ArcElement, Tooltip, Legend);


// ✅ Helper to read CSS variables
const cssVar = (name) =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

// ✅ Center text plugin
const centerTextPlugin = {
  id: 'centerText',
  afterDraw(chart) {
    const { ctx } = chart;
    const meta = chart.getDatasetMeta(0);
    if (!meta?.data?.length) return;

    const { x, y } = meta.data[0];

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Main number
    ctx.font = 'bold 26px Inter, Arial';
    ctx.fillStyle = '#000';
    ctx.fillText('70%', x, y);

    // Subtitle
    ctx.font = '12px Inter, Arial';
    ctx.fillStyle = '#8c8c8c';
    ctx.fillText('Used', x, y + 22);

    ctx.restore();
  },
};


  const doughnutData = {
    labels: ['Used', 'Remaining', 'Reserved', 'Blocked'],
    datasets: [
      {
        data: [70, 30, 73, 40],
        backgroundColor: [
          cssVar('--primary-700'),
          cssVar('--primary-500'),
          cssVar('--primary-300'),
          cssVar('--primary-100'),
        ],
        spacing: 6,        // 👈 gap between slices
        borderWidth: 0,    // 👈 IMPORTANT: no black borders
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',       // 👈 thinner slices
    plugins: {
      legend: {
        display: false,  // 👈 remove bars under chart
      },
      tooltip: {
        enabled: true,
      },
    },
  };




export default function UserTypesChart() {
  return (
    
 

        <Row gutter={16} align="middle">
        {/* Left: Doughnut chart */}
        <Col span={10}>
  


      <div style={{ width: '100%', height: 280 }}>
      <Doughnut
        data={doughnutData}
        options={options}
        plugins={[centerTextPlugin]}
      />
    </div>
        </Col>

        {/* Right: Title + Ellipsis */}
        <Col  span={14}>
            <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid red',
                padding: '0 8px', // optional spacing
                height: '100%',   // optional: make div full height of Col
                

            }}
            >
            <h4>Table Title</h4>
            <EllipsisOutlined style={{ cursor: 'pointer' }} />


            </div>



            <Space  vertical style={{width:'100%'}}>


                
            <div style={{display:'flex',alignItems:'center',border:'1px dashed red',gap:7}}>

                 <div style={{padding:1,backgroundColor:'grey',width:17,height:17,borderRadius:4}}></div>

                  <div style={{display:'flex',flexDirection:'column',flex:1}}> 

                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h4 style={{margin:0}}>Progress Bar Label</h4>
                            <span>10%</span>
                        </div>
 
                        <Progress percent={10} showInfo={false} strokeColor='var(--primary-500)' />
                  </div>
            </div>
            <div style={{display:'flex',alignItems:'center',border:'1px dashed red',gap:7}}>

                 <div style={{padding:1,backgroundColor:'grey',width:17,height:17,borderRadius:4}}></div>

                  <div style={{display:'flex',flexDirection:'column',flex:1}}> 

                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h4 style={{margin:0}}>Progress Bar Label</h4>
                            <span>10%</span>
                        </div>
 
                        <Progress percent={10} showInfo={false} strokeColor='var(--primary-500)' />
                  </div>
            </div>
            <div style={{display:'flex',alignItems:'center',border:'1px dashed red',gap:7}}>

                 <div style={{padding:1,backgroundColor:'grey',width:17,height:17,borderRadius:4}}></div>

                  <div style={{display:'flex',flexDirection:'column',flex:1}}> 

                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h4 style={{margin:0}}>Progress Bar Label</h4>
                            <span>10%</span>
                        </div>
 
                        <Progress percent={10} showInfo={false} strokeColor='var(--primary-500)' />
                  </div>
            </div>
            <div style={{display:'flex',alignItems:'center',border:'1px dashed red',gap:7}}>

                 <div style={{padding:1,backgroundColor:'grey',width:17,height:17,borderRadius:4}}></div>

                  <div style={{display:'flex',flexDirection:'column',flex:1}}> 

                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h4 style={{margin:0}}>Progress Bar Label</h4>
                            <span>10%</span>
                        </div>
 
                        <Progress percent={10} showInfo={false} strokeColor='var(--primary-500)' />
                  </div>
            </div>
            </Space>



        </Col>
        </Row>
  )
}
