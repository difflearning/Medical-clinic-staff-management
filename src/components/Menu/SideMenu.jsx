import React from 'react';
import { Avatar, Badge, Card, Flex, Menu } from 'antd';
import {
  HomeOutlined,
  ScheduleOutlined,
  TeamOutlined,
  FileTextOutlined,
  UserOutlined,
  SettingOutlined,
  SplitCellsOutlined,
} from '@ant-design/icons';
import './SideMenu.css';  // your custom CSS

import ava1 from '../../assets/styles/img/01.jpg'


// Define menu items
const items = [
  {
    key: 'dashboard',
    icon: <HomeOutlined />,          // Home icon
    label: 'Dashboard',
    children: [
      {
        key: 'overview',
        label: 'Overview',
        icon: <FileTextOutlined />,   // optional icon for sub-item
      },
      {
        key: 'stats',
        label: 'Statistics',
        icon: <FileTextOutlined />,
      },
    ],
  },
  {
    key: 'rota',
    icon: <ScheduleOutlined />,      // calendar/schedule icon
    label: 'Rota',
  },
  {
    key: 'manager-user',
    icon: <TeamOutlined />,          // team icon
    label: 'Manage Users',
    children: [
      {
        key: 'add-user',
        label: 'Add User',
        icon: <UserOutlined />,       // user icon
      },
      {
        key: 'all-users',
        label: 'All Users',
        icon: <UserOutlined />,
      },
    ],
  },
  {
    key: 'requests',
    icon: <FileTextOutlined />,      // document icon
    label: 'Requests',
  },
  {
    key: 'profile',
    icon: <UserOutlined />,          // user profile icon
    label: 'Profile',
  },
];



const item=[
    
    {
        key:'settings',
        icon:<SettingOutlined/>,
        label:'Settings'

    }


]

const SideMenu = () => {
  return (
    <div  style={{display:'flex',flexDirection:'column',gap:'18px',border:'1px dashed red',height:'100vh'}}>
      <Menu
        mode="inline"       // vertical sidebar
        items={items}       // menu items
        defaultSelectedKeys={['home']} // select first by default
        style={{ height: '100%', borderRight:0,border:'1px dashed red' }}
      />
      <Menu 
        mode="inline"       // vertical sidebar
        items={item}       // menu items
        defaultSelectedKeys={['home']} // select first by default
        style={{ height: '100%', borderRight: 0,border:'1px dashed red',flex:1 }}
      /> 
        <Card bodyStyle={{ padding: 7 }} style={{ margin: 0, boxShadow: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',gap:'12px' }}>
                    {/* Avatar and user info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    
                    <Badge  style={{ backgroundColor: 'var(--color-success)' }}  dot offset={[-7,30]}>

                    <Avatar size={35}   src={ava1} />

                    </Badge>


                    <div style={{margin: 0,padding:0}}>
                        <h4 style={{ fontSize:'12px',margin: 0,padding:0 }}>Ikram Sakib</h4>
                        <span style={{ fontSize: '9px', color: '#888',margin: 0,padding:0 }}>Ikramsakib2@gmail.com</span>
                    </div>
                    </div>

                    {/* Icon on the right */}
                    <SplitCellsOutlined style={{ fontSize: 20, color: '#555' }} />
                </div>
        </Card>


    </div>
  );
};

export default SideMenu;