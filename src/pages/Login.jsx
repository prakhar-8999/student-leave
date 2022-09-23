import React, { useState } from 'react'
import { Button, Form, Input, } from 'antd';
import loginimage from '../images/loginimage.jpg'
import Navbar from '../components/Navbar';
const Login = () => {



    const [loading, setloading] = useState(false);

    const onFinish = (values) => {
        console.log(values)
        setloading(false)
    };

    const onFinishFailed = (errorInfo) => {

    };


    return (
        <>
            <div style={{ marginTop: '2rem' }}>
                <Navbar />
            </div>
            <div className="lg:flex">
                <div className="lg:w-1/2 xl:max-w-screen-sm">
                    <div className="py-12 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                        <div className="cursor-pointer flex items-center">
                            <div>
                            </div>
                            <div className="text-5xl text-slate-700 tracking-wide ml-6 font-semibold">Welcome Back !!!!</div>
                        </div>
                    </div>
                    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                        <h2 className="text-center text-4xl text-slate-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Log in</h2>
                        <div className="mt-12">




                            <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div><br />
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" style={{ width: '100%', fontSize: '1.125rem', lineHeight: '1.75rem' }} />
                                    </Form.Item>


                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            Password
                                        </div>
                                    </div>
                                    <br />
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" style={{ width: '100%', fontSize: '1.125rem', lineHeight: '1.75rem' }} />
                                    </Form.Item>


                                </div>

                                <div className="mt-10" style={{ marginTop: '1.5cm' }}>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="bg-slate-900 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg" style={{ backgroundColor: 'black', width: '100%', height: '1.2cm', borderRadius: '30px' }} loading={loading}>
                                            Login
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex items-center justify-center flex-1 h-auto">
                    <div className="max-w-3xl transform duration-500 hover:scale-110 cursor-pointer">
                        <img src={loginimage} alt="images" />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Login