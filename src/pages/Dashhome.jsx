import React, { useEffect, useState } from 'react'
import Alert from '../components/Alert'
import Dashloader from '../components/Dashloader'
import apihit from '../static/axios'

const Dashhome = () => {

    const [load, setload] = useState(true)
    const [role, setrole] = useState('')
    const [data, setdata] = useState({});
    const [leavedata, setleavedata] = useState({})
    const dashhomehit = () => {
        apihit.get('api/details')
            .then(res => {
                console.log(res)
                setdata(res.data[0])
                setload(false)

            })
            .catch(err => {
                console.log(err)
                Alert(err.response.status)
            })
    }

    const stdnumber = () => {
        apihit.get('api/leavedetails')
            .then(res => {
                console.log(res)
                setleavedata(res.data)
            })
            .catch(err => {
                console.log(err)
                Alert(err.response.status)
            })
    }

    const show = () => {
        setrole(localStorage.getItem('role'))
    }
    useEffect(() => {
        show();
        dashhomehit()
        stdnumber()
    }, [])


    return (

        load ? <Dashloader /> :
            <>
                {/* student view */}

                <dir>
                    <h1 class="text-2xl font-bold">Welcome {data.first_name + " " + data.last_name}</h1>
                </dir>

                <div style={{ display: role === 'Student' ? 'block' : 'none' }}>
                    <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-2">
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">Total No. of Medical Leave</span>
                                    <span class="text-lg font-semibold">{leavedata.medical_leave}</span>
                                </div>
                                <div class="p-5 bg-gray-200 rounded-md">
                                    <img style={{ width: '1cm' }} src="https://thumbs.dreamstime.com/b/medical-logo-sign-stock-vector-medical-logo-vector-117790920.jpg" alt="fdsf" />
                                </div>
                            </div>
                            <div>
                                {/* <span class="inzline-block px-2 text-sm text-white bg-green-300 rounded">14%</span> */}
                                <span>Session 2022</span>
                            </div>
                        </div>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">Total No. of Event Leave</span>
                                    <span class="text-lg font-semibold">{leavedata.event_leave}</span>
                                </div>
                                <div class="p-5 bg-gray-200 rounded-md">
                                    <img style={{ width: '1cm' }} src="https://media.istockphoto.com/vectors/hackathon-and-datathon-set-of-doodle-style-icons-vector-id1306326254?k=20&m=1306326254&s=612x612&w=0&h=heKcYXlJQ2PsM5dfMKN1CD-tQi43h8CTBsODzL-CVjE=" alt="fdsf" />
                                </div>
                            </div>
                            <div>
                                {/* <span class="inzline-block px-2 text-sm text-white bg-green-300 rounded">14%</span> */}
                                <span>Session 2022</span>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <img style={{ width: '100%' }} src="https://www.gurpreetsaluja.com/wp-content/uploads/2016/05/always-keep-learning.png" alt="" />
                    </div>
                </div>

                {/* Hod And Coordinator View */}
                <div style={{ display: role !== 'Student' ? 'block' : 'none' }}>
                    <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">Total No. of Students</span>
                                    <span class="text-lg font-semibold">{leavedata.all}</span>
                                </div>
                                <div class="p-5 bg-gray-200 rounded-md">
                                    <img style={{ width: '1cm' }} src="https://www.shareicon.net/data/512x512/2015/11/01/665405_users_512x512.png" alt="fdsf" />
                                </div>
                            </div>
                            <div>
                                {/* <span class="inzline-block px-2 text-sm text-white bg-green-300 rounded">14%</span> */}
                                <span>Session 2022</span>
                            </div>
                        </div>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">Students on Event Leave</span>
                                    <span class="text-lg font-semibold">{leavedata.event_leave}</span>
                                </div>
                                <div class="p-5 bg-gray-200 rounded-md">
                                    <img style={{ width: '1cm' }} src="https://media.istockphoto.com/vectors/hackathon-and-datathon-set-of-doodle-style-icons-vector-id1306326254?k=20&m=1306326254&s=612x612&w=0&h=heKcYXlJQ2PsM5dfMKN1CD-tQi43h8CTBsODzL-CVjE=" alt="fdsf" />
                                </div>
                            </div>
                            <div>
                                {/* <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span> */}
                                <span>Session 2022</span>
                            </div>
                        </div>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-between">
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">Students on Medical Leave</span>
                                    <span class="text-lg font-semibold">{leavedata.medical_leave}</span>
                                </div>
                                <div class="p-5 bg-gray-200 rounded-md">
                                    <img style={{ width: '1cm' }} src="https://thumbs.dreamstime.com/b/medical-logo-sign-stock-vector-medical-logo-vector-117790920.jpg" alt="fdsf" />
                                </div>
                            </div>
                            <div>
                                {/* <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span> */}
                                <span>Session 2022</span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-2">
                        <div>
                            <img style={{ height: '100%' }} src="https://www.researchgate.net/publication/324312662/figure/fig3/AS:613179226869761@1523204728853/Dropouts-for-academic-problems-in-graph-chart.png" alt="academic problem" />
                        </div>
                        <div>
                            <img style={{ height: '100%' }} src="https://www.researchgate.net/publication/314139952/figure/fig6/AS:668882817806346@1536485499900/Bar-graph-on-the-education-level-of-the-interviewees.png" alt="education" />
                        </div>
                    </div>
                </div>

            </>

    )
}

export default Dashhome