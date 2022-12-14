import React, { useState } from 'react'
import { Button, DatePicker, Form, Select } from 'antd';
import { Input } from 'antd';
import apihit from '../static/axios';
import Alert from '../components/Alert';
import Swal from 'sweetalert2';
import moment from 'moment';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
};

const rangeConfig = {
    rules: [
        {
            type: 'array',
            required: true,
            message: 'Please select time!',
        },
    ],
};



const Applyleave = () => {

    const [loading, setloading] = useState(false)
    const [form] = Form.useForm();
    const onFinish = (fieldsValue) => {
        setloading(true)
        const rangeValue = fieldsValue['range-picker'];
        console.log(rangeValue)
        const type = fieldsValue['type']
        const des = fieldsValue['des']
        const values = {
            'leave_from': rangeValue[0]._d,
            'leave_to': rangeValue[1]._d,
            'leave_type': type,
            'description': des
        };
        console.log('Received values of form: ', values);
        apihit.post('api/applyleave', values)
            .then(res => {
                console.log(res)
                form.resetFields()
                setloading(false)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Application Submitted Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => {
                console.log(err)
                setloading(false)
                Alert(err.response.status)
            })
    };

    return (
        <div>
            <h1 class="text-2xl font-semibold">Apply for Leave</h1>
            <Form name="time_related_controls" form={form} {...formItemLayout} onFinish={onFinish}>

                <Form.Item name="range-picker" label="Leave Duration" {...rangeConfig}>
                    <RangePicker disabledDate={(current) => current.isBefore(moment().subtract(1, "day"))} format="YYYY-MM-DD" style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    label="Leave Type"
                    name="type"
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
                        <Option value='medical' key='1'>Medical Leave</Option>
                        <Option value='event' key='2'>Event Leave</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="des" label="Description" rules={[
                    {
                        required: true,
                    },
                ]}>
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 8,
                        },
                    }}
                >
                    <Button loading={loading} disabled={loading} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Applyleave