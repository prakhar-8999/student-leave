import React, { useState } from 'react'
import { message } from 'antd';
import loginimage from '../images/loginimage.jpg'
import navlogo from '../images/navlogo.png'
// import Navbar from '../components/Navbar';
import '../css/pages.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from "react-router-dom";
import Alert from '../components/Alert'
import apihit from '../static/axios'
// import Dashboard from './Dashboard'


const Login = () => {

    const navigate = useNavigate();


    const [lapusername, setlapusername] = useState('');
    const [lappassword, setlappassword] = useState('');
    const [mobusername, setmobusername] = useState('');
    const [mobpassword, setmobpassword] = useState('');
    // const [loading, setloading] = useState(false);



    const login = (method) => {

        if (method === 'laplogin') {
            if (lapusername === '' || lapusername === undefined) {
                Alert('Username is required');
                // Swal.fire('username')
            }
            else if (lappassword === '' || lappassword === undefined) {
                Alert('Password is required')
            }
            else {
                console.log(lapusername, lappassword);
                apihit.post('api/login', { 'username': lapusername, 'password': lappassword })
                    .then(res => {
                        console.log(res)
                        message.success({
                            content: 'Login Successfull !!!!',
                            className: 'custom-class',
                            style: {
                                marginTop: '20vh',
                            },
                        });
                        navigate('/Dashboard')

                    })
                    .catch(err => {
                        console.log(err)
                        message.error({
                            content: 'Wrong Credentials !!!!',
                            className: 'custom-class',
                            style: {
                                marginTop: '20vh',
                            },
                        });
                    })
            }
        }
        else {
            if (mobusername === '' || mobusername === undefined) {
                Alert('Username is required');
            }
            else if (mobpassword === '' || mobpassword === undefined) {
                Alert('Password is required')
            }
            else {
                console.log(mobusername, mobpassword);
                apihit.post('api/login', { 'username': mobusername, 'password': mobpassword })
                    .then(res => {
                        console.log(res)
                        message.success({
                            content: 'Login Successfull !!!!',
                            className: 'custom-class',
                            style: {
                                marginTop: '20vh',
                            },
                        });
                        navigate('/Dashboard')
                    })
                    .catch(err => {
                        console.log(err)
                        message.error({
                            content: 'Wrong Credentials !!!!',
                            className: 'custom-class',
                            style: {
                                marginTop: '20vh',
                            },
                        });
                    })
            }
        }
    }


    const mobilepassword = () => {
        if (document.getElementById('mobpass').type === 'password') {
            document.getElementById('mobpass').type = 'text';
        }
        else {
            document.getElementById('mobpass').type = 'password';
        }
    }

    return (
        <>
            <div class="laptop-view">
                <Navbar />
            </div>
            <div class="laptop-view">
                <div class="lg:flex">
                    <div class="lg:w-1/2 xl:max-w-screen-sm">
                        <div class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                            <div class="cursor-pointer flex items-center">
                                <div>
                                    <img src={navlogo} class="w-20" alt="student-logo" />
                                </div>
                                <div class="text-2xl text-gray-800 tracking-wide ml-2 font-semibold">Login Portal</div>
                            </div>
                        </div>
                        <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                            <h2 class="text-center text-5xl text-gray-900 font-display font-semibold lg:text-left xl:text-6xl xl:text-bold">Log in</h2>
                            <div class="mt-12">
                                <div>
                                    <div class="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                    <input onChange={e => setlapusername(e.target.value)} class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-gray-500" type="" placeholder="mike@gmail.com" />
                                </div>
                                <div class="mt-8">
                                    <div class="flex justify-between items-center">
                                        <div class="text-sm font-bold text-gray-700 tracking-wide">
                                            Password
                                        </div>
                                        <div>
                                            <p class="text-xs font-display font-semibold text-gray-600 hover:text-gray-800
                                        cursor-pointer">
                                                Forgot Password?
                                            </p>
                                        </div>
                                    </div>
                                    <input onChange={e => setlappassword(e.target.value)} class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-gray-500" type="password" id='lappass' placeholder="Enter your password" />
                                </div>
                                <div class="mt-10">
                                    <button onClick={() => login('laplogin')} class="bg-gray-600 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-800
                                shadow-lg">
                                        Log In
                                    </button>
                                </div>
                                <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                                    Don't have an account ? <Link to='/Register' class="cursor-pointer text-gray-600 hover:text-gray-800">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:flex items-center justify-center flex-1 h-screen">
                        <div class="transform duration-200 hover:scale-110 cursor-pointer">
                            <img src={loginimage} style={{ width: '20cm' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="laptop-view">
                <Footer />
            </div>


            {/* Mobile-form */}

            <div class="mobile-view">
                <div class="px-4 py-16 mt-36 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                    <div class="max-w-lg mx-auto">
                        <div class="cursor-pointer flex items-center">
                            <div>
                                <img src={navlogo} class="w-20" alt="student-logo" />
                            </div>
                            <div class="text-2xl text-gray-800 tracking-wide ml-2 font-semibold">Login Portal</div>
                        </div>


                        <div class="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4">
                            <p class="text-lg text-yellow-400 font-medium">Sign in to your account</p>

                            <div>
                                <label for="email" class="text-sm font-medium">Email</label>

                                <div class="relative mt-1">
                                    {/* <input
                                        type="email"
                                        id="email"
                                        class="w-full p-4 pr-12 text-sm border-yellow-400 rounded-lg shadow-sm"
                                        placeholder="Enter email"
                                    /> */}
                                    <input onChange={e => setmobusername(e.target.value)} class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-gray-500" type="" placeholder="mike@gmail.com" />

                                    <span class="absolute inset-y-0 inline-flex items-center right-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label for="password" class="text-sm font-medium">Password</label>

                                <div class="relative mt-1">
                                    <input onChange={e => setmobpassword(e.target.value)} class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-gray-500" type="password" id='mobpass' placeholder="Enter your password" />
                                    <span class="absolute inset-y-0 inline-flex items-center right-4">
                                        <button onClick={mobilepassword}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-5 h-5 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <br /><br />
                            <button onClick={() => login('moblogin')} class="bg-yellow-400 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-600
                                shadow-lg">
                                Log In
                            </button>
                            <br /><br />
                            <p class="text-sm text-gray-500">
                                No account?
                                <Link to='/Register' class="underline" style={{ float: 'right' }}>Sign up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile-form */}


        </>
    )
}

export default Login