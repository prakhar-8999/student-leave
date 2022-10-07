import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'
import Dashloader from '../components/Dashloader'
import apihit from '../static/axios'
import { Button } from 'antd';

const Preleaves = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState([])
    const [loader, setloader] = useState(true)


    const prel = () => {
        apihit.get('api/applyleave')
            .then(res => {
                console.log(res)
                setdata(res.data)
                setloader(false)
            })
            .catch(err => {
                console.log(err)
                Alert(err.response.status)
            })
    }

    const endleave = (id, type) => {
        console.log(id)
        console.log(type);
        localStorage.setItem('id', id)
        localStorage.setItem('type', type)
        navigate("/Dashboard/upload-data")
    }

    useEffect(() => {
        prel()
    }, [])



    return (
        loader ? <Dashloader /> :
            <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((val, index) => (
                    // <Link to="/Dashboard/upload-data">
                    <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                        <div class="flex items-start justify-between">
                            <div class="flex-col space-y-2">
                                <span class="text-2xl font-semibold">Leave Status</span><br />
                                <span class="text-xl text-gray-800">leave duration</span><br /><br />
                                <span class="text-lg text-gray-800">From : {val.leave_from}</span>
                                <span class="text-lg text-gray-800 ml-20">To : {val.leave_to}</span><br /><br />
                                <span class="text-lg text-gray-800">Type : <span style={{ color: val.leave_type === 'event' ? 'blue' : '#ff8000' }}>{val.leave_type}</span></span>
                                <span class="text-lg text-gray-800 ml-32">Status : <span style={{ color: val.leave_status === 'Pending' || val.leave_status === 'Rejected' ? 'red' : 'green' }}>{val.leave_status}</span></span><br />
                            </div>
                        </div>
                        <br />
                        <div>
                            {/* <span class="inzline-block px-2 text-sm text-white bg-green-300 rounded">14%</span> */}
                            <span>Session 2022</span>
                            <button style={{ float: 'right', display: val.leave_status !== 'Approved' ? 'none' : 'block' }} disabled={val.leave_status === 'Leave Completed' || val.leave_status === 'Pending' || val.leave_status === 'Rejected'} onClick={() => endleave(val.id, val.leave_type)} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{val.leave_status === 'Leave Completed' ? 'Leave Completed' : 'End Leave'}</button>
                            <Button style={{ float: 'right', display: val.leave_status === 'Approved' ? 'none' : 'block' }} disabled type="primary" size="large">
                                End Leave
                            </Button>
                        </div>
                        <br />
                    </div>
                    // </Link>
                ))}

            </div>
    )
}

export default Preleaves