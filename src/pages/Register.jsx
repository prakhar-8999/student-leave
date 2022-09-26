import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { Button } from 'antd';
import Swal from 'sweetalert2';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import apihit from '../static/axios';
import '../css/pages.css'

const Register = () => {


    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const [loading, setloading] = useState(false);
    const [resloading, setresloading] = useState(false)
    const [inputs, setInputs] = useState({});
    // const [otp, setotp] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const sendotp = (event) => {
        event.preventDefault();
        setloading(true)
        console.log(inputs);

        // document.getElementById('invisible-btn').click()
        if (inputs.fname === '' || inputs.fname === undefined || inputs.lname === '' || inputs.lname === undefined || inputs.email === '' || inputs.email === undefined || inputs.username === '' || inputs.username === undefined || inputs.password === '' || inputs.password === undefined) {
            Swal.fire(
                'EMPTY FIELDS',
                'All fields are required',
                'question'
            )
            setloading(false)
        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email) === false) {
            console.log('khfskdf')
            Swal.fire('Invalid Email Address !!!!')
            setloading(false)
        }
        else {
            apihit.post('api/register', inputs)
                .then(res => {
                    console.log(res)
                    setloading(false)
                    document.getElementById('invisible-btn').click()
                })
                .catch(err => {
                    console.log(err)
                    setloading(false)
                })
        }


    }

    const otpverify = () => {
        // if (otp === '' || otp === undefined) {
        // Swal.fire('OTP is Required')
        // }
        // else {
        setresloading(true)
        console.log(inputs)
        apihit.post('api/otp/verify', inputs)
            .then(res => {
                console.log(res)
                setresloading(false)
                document.getElementById('modal-close').click()
                Swal.fire('Registration Successfull !!!!')
                setInputs({})
            })
            .catch(err => {
                console.log(err)
                setresloading(false)
                Swal.fire('Wrong OTP')
            })
        // }
    }

    return (
        <>
            <div class='laptop-view'>
                <Navbar />
            </div>
            <div class="mt-20 flex items-center justify-center">

                <div class="bg-white p-16 rounded shadow-2xl lg:w-2/3 sm:w-5/6">

                    <h2 class="text-3xl font-bold mb-10 text-yellow-600">Student Registration</h2>

                    <div class="space-y-5">
                        {/* <form name='reg'> */}
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label class="block mb-1 font-bold text-gray-500">First Name</label>
                                <input type="text" name="fname" value={inputs.fname || ""} onChange={handleChange} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-yellow-500" required />
                            </div>
                            <div>
                                <label class="block mb-1 font-bold text-gray-500">Last Name</label>
                                <input type="text" name="lname" value={inputs.lname || ""} onChange={handleChange} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-yellow-500" required />
                            </div>
                        </div>

                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label class="block mb-1 font-bold text-gray-500">Year</label>
                                <select name="year" value={inputs.year || ""} style={{ backgroundColor: 'white' }} onChange={handleChange} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-yellow-500">
                                    <option value="" disabled>Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div>
                                <label class="block mb-1 font-bold text-gray-500">Section</label>
                                <select name="sec" value={inputs.sec || ""} style={{ backgroundColor: 'white' }} onChange={handleChange} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-yellow-500">
                                    <option value="" disabled>Select</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block mb-1 font-bold text-gray-500">Email</label>
                            <input type="email" name="email" value={inputs.email || ""} onChange={handleChange} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-yellow-500" required />
                        </div>

                        <div>
                            <label class="block mb-1 font-bold text-gray-500">Username</label>
                            <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-yellow-500" required />
                        </div>

                        {/* <div>
                            <label class="block mb-1 font-bold text-gray-500">Phone Number</label>
                            <input type="number" name='number' value={inputs.number || ""} onChange={handleChange} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-yellow-500" />
                        </div> */}

                        <div>
                            <label class="block mb-1 font-bold text-gray-500">Password</label>
                            <input type="password" name="password" value={inputs.password || ""} onChange={handleChange} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-yellow-500" required />
                        </div>
                        <br />

                        {/* <div class="flex items-center">
                            <input type="checkbox" name="agree" />
                            <label for="agree" class="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
                        </div> */}

                        {/* <Button type="submit" disabled={loading} loading={loading} style={{ width: '100%' }} class="block w-100 bg-yellow-400 hover:bg-yellow-500 p-4 rounded text-white transition duration-300">
                            Send OTP
                        </Button> */}
                        <button type='submit' disabled={loading} class="block w-full bg-yellow-400 hover:bg-yellow-500 p-4 rounded text-white transition duration-300" onClick={sendotp}>
                            Send OTP{loading ? <i className="fa fa-refresh fa-spin" style={{ marginLeft: "5px" }} /> : null}
                        </button>
                        <button id="invisible-btn" style={{ visibility: 'hidden' }} data-hs-overlay="#hs-vertically-centered-modal">modal open</button>
                        {/* </form> */}
                    </div>
                    <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Already have an account ? <Link to='/Login' class="cursor-pointer text-gray-600 hover:text-gray-800">Sign in</Link>
                    </div>

                </div>

            </div><br /><br />
            <div class='laptop-view'>
                <Footer />
            </div>




            <div id="hs-vertically-centered-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                            <h3 class="font-bold text-gray-800 dark:text-white">
                                OTP Verification
                            </h3>
                            <button id="modal-close" type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-modal">
                                <span class="sr-only">Close</span>
                                <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div class="p-4 overflow-y-auto">
                            <div class="py-5 px-3">
                                <div class="container mx-auto">
                                    <div class="max-w-sm mx-auto md:max-w-lg">
                                        <div class="w-full">
                                            <div class="bg-white h-64 py-3 rounded text-center">
                                                <h1 class="text-2xl font-bold">OTP Verification</h1>
                                                <div class="flex flex-col mt-4">
                                                    <span>Enter the OTP you received at</span><br />
                                                    <span class="font-bold">{inputs.email}</span>
                                                    <span>Please Check your Spam</span>
                                                </div>
                                                <br />
                                                <div>
                                                    <label class="block mb-1 font-bold text-gray-500">OTP</label>
                                                    <input type="number" name="otp" value={inputs.otp} onChange={handleChange} style={{ width: '8cm' }} class="border-2 border-gray-200 p-3 rounded outline-none focus:border-yellow-500" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                            <button type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-modal">
                                Cancel
                            </button>
                            <button type="button" onClick={otpverify} disabled={resloading} class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                                Register {resloading ? <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }} /> : null}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Register