import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Col, Progress, Row, Space } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

ChartJS.register(ArcElement, Tooltip, Legend);

// Helper to read CSS variables
const cssVar = (name) =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

// Center text plugin
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

    ctx.font = 'bold 26px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText('70%', x, y);

    ctx.font = '12px Arial';
    ctx.fillStyle = '#8c8c8c';
    ctx.fillText('Used', x, y + 22);

    ctx.restore();
  },
};

export default function UserTypesChart() {
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
        spacing: 6,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  const progressItems = [
    { label: 'Progress Bar Label', percent: 10 },
    { label: 'Progress Bar Label', percent: 25 },
    { label: 'Progress Bar Label', percent: 40 },
    { label: 'Progress Bar Label', percent: 5 },
  ];

  return (
    <Row gutter={16} align="middle">
      {/* Doughnut */}
      <Col span={10}>
        <div style={{ width: '100%', height: 280 }}>
          <Doughnut
            data={doughnutData}
            options={options}
            plugins={[centerTextPlugin]}
          />
        </div>
      </Col>

      {/* Right side */}
      <Col span={14}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}
        >
          <h4 style={{ margin: 0 }}>Table Title</h4>
          <EllipsisOutlined style={{ cursor: 'pointer' }} />
        </div>

        {/* Progress list */}
        <Space direction="vertical" style={{ width: '100%' }} size={12}>
          {progressItems.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              {/* Color square */}
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  backgroundColor: cssVar('--primary-500'),
                }}
              />

              {/* Label + progress */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.label}</span>
                  <span>{item.percent}%</span>
                </div>

                <Progress
                  percent={item.percent}
                  showInfo={false}
                  strokeColor={cssVar('--primary-500')}
                />
              </div>
            </div>
          ))}
        </Space>
      </Col>
    </Row>
  );
}