import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {

    const navigate = useNavigate();

    const gohomepage = () => {
        navigate("/Login")
    }

    return (
        <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div class="max-w-md text-center">
                    <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span class="sr-only">Error</span>404
                    </h2>
                    <p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p class="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our Portal.</p>
                    <button onClick={gohomepage} class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to Login Page</button>
                </div>
            </div>
        </section>
    )
}

export default Page404