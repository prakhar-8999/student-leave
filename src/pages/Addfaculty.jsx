import React, { useState } from 'react'
import { Button, Form, Input, InputNumber } from 'antd';
import { Select } from 'antd';
import apihit from '../static/axios';
import Swal from 'sweetalert2';
import Alert from '../components/Alert';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};


const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};


const Addfaculty = () => {
    const [form] = Form.useForm();
    const [btnload, setbtnload] = useState(false)

    const onFinish = (values) => {
        setbtnload(true)
        console.log(values);
        apihit.post('api/employee', values)
            .then(res => {
                console.log(res)
                setbtnload(false)
                form.resetFields()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Faculty Added Successfully',
                    showConfirmButton: false,
                    timer: 1200
                })
            })
            .catch(err => {
                console.log(err)
                setbtnload(false)
                Alert(err.response.status);
            })
    };


    return (
        <>
            <h1 class="text-3xl font-extrabold">Add Faculty</h1>
            <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name='fname'
                    label="First Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='lname'
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='username'
                    label="Faculty Id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='email'
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='sub'
                    label="Subject"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>


                <Form.Item
                    label="Year"
                    name="year"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                        defaultValue="Select"
                    >
                        <Option value='1' key='1'>1</Option>
                        <Option value='2' key='2'>2</Option>
                        <Option value='3' key='3'>3</Option>
                        <Option value='4' key='4'>4</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Section"
                    name="sec"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                        defaultValue="Select"
                    >
                        <Option value='A' key='1'>A</Option>
                        <Option value='B' key='2'>B</Option>
                        <Option value='C' key='3'>C</Option>
                    </Select>
                </Form.Item>
                <br /><br />


                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" loading={btnload} disabled={btnload} style={{ width: '100%' }} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
}

export default Addfaculty