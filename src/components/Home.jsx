import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Homeloader from './Homeloader'

const Home = () => {


    const [homeloader, sethomeloader] = useState(true);

    const navigate = useNavigate();

    setTimeout(function () {
        sethomeloader(false)
        navigate("/Login")
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