import React from 'react'
import Swal from 'sweetalert2'
import { message } from 'antd';

const Alert = (reason) => {

    console.log(reason)


    const givealert = () => {
        if (reason === 'Username is required') {
            Swal.fire('Username is required')
        }
        else if (reason === 'Password is required') {
            Swal.fire('Password is required')
        }
        else if (reason === 'logout') {
            message.success({
                content: 'Logout Successfull !!!!',
                className: 'custom-class',
                style: {
                    marginTop: '10vh',
                },
            });
        }
        else if (reason === 403) {
            message.error({
                content: 'You are already on leave !!!!',
                className: 'custom-class',
                style: {
                    marginTop: '1vh',
                },
            });
        }
    }

    givealert();

    return (
        <div>Alert</div>
    )
}

export default Alert