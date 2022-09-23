import React, { useState } from 'react'
import Homeloader from './Homeloader'

const Home = () => {


    const [homeloader, sethomeloader] = useState(true);

    setTimeout(function () {
        sethomeloader(false)
    }, 2000);


    return (
        homeloader ?
            <Homeloader /> :
            <>
                <div>Welcome Back</div>
            </>
    )
}

export default Home