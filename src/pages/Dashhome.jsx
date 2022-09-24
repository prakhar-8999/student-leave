import React from 'react'

const Dashhome = () => {
    return (
        <>
            {/* student view */}
            <dir>
                <h1 class="text-xl font-bold">Welcome Name</h1>
            </dir>
            <div>
                <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-2">
                    <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                        <div class="flex items-start justify-between">
                            <div class="flex flex-col space-y-2">
                                <span class="text-gray-400">Total No. of Medical Leave</span>
                                <span class="text-lg font-semibold">100,221</span>
                            </div>
                            <div class="p-10 bg-gray-200 rounded-md"></div>
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
                                <span class="text-lg font-semibold">100,221</span>
                            </div>
                            <div class="p-10 bg-gray-200 rounded-md"></div>
                        </div>
                        <div>
                            {/* <span class="inzline-block px-2 text-sm text-white bg-green-300 rounded">14%</span> */}
                            <span>Session 2022</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hod And Coordinator View */}
            <div>
                <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                        <div class="flex items-start justify-between">
                            <div class="flex flex-col space-y-2">
                                <span class="text-gray-400">Total No. of Students</span>
                                <span class="text-lg font-semibold">100,221</span>
                            </div>
                            <div class="p-10 bg-gray-200 rounded-md"></div>
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
                                <span class="text-lg font-semibold">100,221</span>
                            </div>
                            <div class="p-10 bg-gray-200 rounded-md"></div>
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
                                <span class="text-lg font-semibold">100,221</span>
                            </div>
                            <div class="p-10 bg-gray-200 rounded-md"></div>
                        </div>
                        <div>
                            {/* <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span> */}
                            <span>Session 2022</span>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Dashhome