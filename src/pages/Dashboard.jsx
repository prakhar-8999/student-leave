import React, { useState, useEffect } from 'react'
import { UploadOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Dropdown } from 'antd'
// UserOutlined, VideoCameraOutlined,   
import '../css/pages.css'
import navlogo from '../images/navlogo.png'
import { Link, Outlet } from 'react-router-dom';
import apihit from '../static/axios';
import Alert from '../components/Alert';
import { useNavigate } from "react-router-dom";
import Dashloader from '../components/Dashloader';


const { Header, Content, Footer, Sider } = Layout;
const height = window.innerHeight - 150
const Dashboard = () => {
    const navigate = useNavigate();

    const [dashload, setdashload] = useState(true)
    // const [person, setperson] = useState('')
    const [leftpannel, setleftpannel] = useState([])

    const dashhit = () => {
        apihit.get('api/dashboard')
            .then(res => {
                console.log(res)
                setdashload(false)
                localStorage.setItem('role', res.data.person)
                // setperson(res.data.person)
                setleftpannel(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


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

    useEffect(() => {
        dashhit();
    }, [])



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
        dashload ? <Dashloader /> :
            <>
                <Layout>
                    <div class='side-panel'>
                        <Sider
                            style={{ height: '100%' }}
                            // class='side-panel'
                            // breakpoint="lg"
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
                            {/* <Menu
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
                    /> */}

                            {leftpannel.map((any, index) => (
                                <Link to={any.url} key={index}>
                                    <Menu theme="dark" mode="inline" items={[{ key: index, icon: <UploadOutlined />, label: any.name, }]} />
                                </Link>

                            ))}

                        </Sider>
                    </div>
                    <Layout>
                        <Header className="site-layout-sub-header-background" style={{ padding: 0, }} >
                            {/* <i class="fa-solid fa-bars-sort"></i> */}
                            <div>
                                <button class='ml-5 side-panel-btn' style={{ display: 'inline-flex' }} data-hs-overlay="#hs-overlay-body-scrolling"><i class="fa-solid fa-bars fa-xl"></i></button>
                                <Dropdown overlay={menu}>
                                    <button onClick={(e) => e.preventDefault()} style={{ float: 'right', marginRight: '10px', zIndex: '2', marginTop: '0.2cm' }}>
                                        <img style={{ float: 'right', width: '1cm', height: '1cm', marginTop: '10px', marginRight: '10px' }} src={navlogo} alt="use8g76t" />
                                    </button>
                                </Dropdown>
                            </div>
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




                {/* side Bar */}
                <div id="hs-overlay-body-scrolling" class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full w-full z-[60] bg-white border-r dark:bg-gray-800 dark:border-gray-700 [--body-scroll:true] [--overlay-backdrop:false]" tabindex="-1">
                    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 class="font-bold text-gray-800 dark:text-white">
                            Click to Route pages
                        </h3>
                        <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-overlay-body-scrolling">
                            <span class="sr-only">Close modal</span>
                            <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                    <div class="p-4">
                        <div class='flex mb-10'>
                            <img src={navlogo} style={{ width: '2cm' }} alt="logo" /><span class='mt-6 ml-3 text-xl font-bold'>Student Leave Portal</span>
                        </div>


                        {leftpannel.map((any, index) => (
                            <Link to={any.url} key={index}>
                                <button style={{ width: '100%' }} data-hs-overlay="#hs-overlay-body-scrolling">
                                    <ul class="space-y-1.5">

                                        <li>
                                            <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white" href="javascript:;">
                                                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                                </svg>
                                                <span class='text-lg font-semibold'>{any.name}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </button><br />

                            </Link>

                        ))}

                    </div>
                </div>


            </>
    )
}

export default Dashboard