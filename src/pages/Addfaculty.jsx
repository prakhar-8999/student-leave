import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd';
import { Select } from 'antd';
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


    const onFinish = (values) => {
        console.log(values);
    };


    return (

        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
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
                name='subject'
                label="Subject"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <InputNumber style={{ width: '100%' }} />
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
                        width: '70%',
                    }}
                >

                    <Option value='1' key='1'>1</Option>
                    <Option value='2' key='2'>2</Option>
                    <Option value='3' key='3'>3</Option>
                    <Option value='4' key='4'>4</Option>
                </Select>
            </Form.Item>

            <Form.Item name='introduction' label="Introduction">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )
}

export default Addfaculty