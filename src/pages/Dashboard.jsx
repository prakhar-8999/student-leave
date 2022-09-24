import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Dropdown } from 'antd'

import '../css/pages.css'
import navlogo from '../images/navlogo.png'
import { Outlet } from 'react-router-dom';
import apihit from '../static/axios';
import Alert from '../components/Alert';
import { useNavigate } from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;
const height = window.innerHeight - 150
const Dashboard = () => {
    const navigate = useNavigate();


    const logout = () => {
        apihit.get('api/logout')
            .then(res => {
                Alert('logout')
                navigate("/Login")
            })
            .catch(err => {
                console.log(err)
            })
    }


    const menu = (
        <Menu
            items={[
                {
                    label: (
                        <Button style={{ width: '100%' }} onClick={logout}>
                            <LogoutOutlined /><span className='ml-2'>Logout</span>
                        </Button>
                    ),
                    key: '1',
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Thank You for Using our Service',
                    key: '3',
                    disabled: true,
                },
            ]}
        />
    );



    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            // onBreakpoint={(broken) => {
            //     console.log(broken);
            // }}
            // onCollapse={(collapsed, type) => {
            //     console.log(collapsed, type);
            // }}
            >
                <div className="logo" >
                    <br />
                    <center>
                        <img src={navlogo} style={{ width: '1.5cm' }} alt="logo" />
                    </center>
                </div>

                <br />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                        (icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            label: `nav ${index + 1}`,
                        }),
                    )}
                />
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0, }} >
                    <Dropdown overlay={menu}>
                        <button onClick={(e) => e.preventDefault()} style={{ float: 'right', marginRight: '10px' }}>
                            <img style={{ float: 'right', width: '1cm', height: '1cm', marginTop: '10px', marginRight: '10px' }} src={navlogo} alt="use8g76t" />
                        </button>
                    </Dropdown>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div className="site-layout-background overflow" style={{ padding: 24, minHeight: height, overflowY: 'scroll' }}   >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Made with love by Team IT
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Dashboard