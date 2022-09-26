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
        else if (reason === 401) {
            Swal.fire({
                title: 'Unauthorized',
                text: "You are not authorized to access this content !!!!",
                icon: 'error',
                // showCancelButton: true,
                allowOutsideClick: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go Back to Login Page'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/Login"
                }
            })
        }
    }

    givealert();

    return (
        <div>Alert</div>
    )
}

export default Alert