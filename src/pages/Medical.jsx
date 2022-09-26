import React, { useEffect, useState } from 'react'
import Alert from '../components/Alert'
import Dashloader from '../components/Dashloader'
import apihit from '../static/axios'

const Medical = () => {

    const [medicaldata, setmedicaldata] = useState([])
    const [loader, setloader] = useState(true)
    const medical = () => {
        apihit.get('api/medical')
            .then(res => {
                console.log(res)
                setmedicaldata(res.data)
                setloader(false)
            })
            .catch(err => {
                console.log(err)
                Alert(err.response.status)
            })
    }
    useEffect(() => {
        medical()
    }, [])

    return (
        loader ? <Dashloader /> :
            <div className="overflow-y-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                S No.
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                From Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                To Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Leave Type
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Year
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Section
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Leave Status
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            {/* <th scope="col" className="py-3 px-6 text-center">
                            Action
                        </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {medicaldata.map((ac, index) => (

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={ac.id}>
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <td className="py-4 px-6">
                                    {ac.uniq_id__first_name + " " + ac.uniq_id__last_name}
                                </td>
                                <td className="py-4 px-6">
                                    {ac.leave_from}
                                </td>
                                <td className="py-4 px-6">
                                    {ac.leave_to}
                                </td>
                                <td className="py-4 px-6">
                                    <span style={{ color: '#ff8000' }}>Medical</span>
                                </td>
                                <td className="py-4 px-6">
                                    {ac.sec__year}
                                </td>
                                <td className="py-4 px-6">
                                    {ac.sec__sec}
                                </td>
                                <td className="py-4 px-6">
                                    <span style={{ color: ac.leave_status === 'Approved' || ac.leave_status === 'Leave Completed' ? 'green' : 'red' }}>{ac.leave_status}</span>
                                </td>
                                <td className="py-4 px-6">
                                    {ac.description}
                                </td>
                                {/* <td className="flex items-center py-4 px-6 space-x-3">
                                <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => approve(ac.id)}>Approve</button>
                                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => reject(ac.id)}>Reject</button>
                            </td> */}
                            </tr>
                        ))}

                    </tbody>
                </table>
                {medicaldata.length === 0 ? <p className='text-center font-bold text-2xl mt-10 text-red-600'>No Medical Leaves</p> : null}

            </div>
    )
}

export default Medical