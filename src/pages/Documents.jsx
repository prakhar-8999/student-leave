import React, { useEffect, useState } from 'react'
import Alert from '../components/Alert'
import Dashloader from '../components/Dashloader'
import apihit from '../static/axios'
import fileurl from '../static/fileurl'
const Documents = () => {


    const [document, setdocument] = useState([])
    const [loader, setloader] = useState(true)
    const documentdata = () => {
        apihit.get('api/files')
            .then(res => {
                console.log(res)
                setdocument(res.data)
                setloader(false)
            })
            .catch(err => {
                console.log(err)
                Alert(err.response.status)
            })
    }


    const getfile = (id) => {
        setloader(true)
        apihit.post('api/files', { id: id })
            .then(res => {
                console.log(res)
                window.open(fileurl + res.data.file)
                setloader(false)
            })
            .catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        documentdata()
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
                            <th scope="col" className="py-3 px-6 text-center">
                                Required Documents
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {document.map((ac, index) => (

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
                                    <span style={{ color: 'green' }}>Leave Completed</span>
                                </td>
                                <td className="py-4 px-6">
                                    {ac.description}
                                </td>
                                <td className="flex items-center py-4 px-6 space-x-3">
                                    <button type="button" style={{ width: '100%' }} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => getfile(ac.id)}>View Documents</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                {document.length === 0 ? <p className='text-center font-bold text-2xl mt-10 text-red-600'>No Documents Found</p> : null}

            </div>
    )
}

export default Documents