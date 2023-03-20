import React from 'react';
import { Button, Form, Input, DatePicker, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const FormCom = () => {
    const { Option } = Select;
    // const layout = {
    //     labelCol: {
    //         span: 8,
    //     },
    //     wrapperCol: {
    //         span: 16,
    //     },
    // };
    // const tailLayout = {
    //     wrapperCol: {
    //         offset: 8,
    //         span: 16,
    //     },
    // };
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <Form
            // {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item
                name="username"
                label="IFSC Code"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input showCount maxLength={20} />
            </Form.Item>

            <Form.Item
                name="account"
                label="Account no."
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input showCount maxLength={15}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                />
            </Form.Item>

            <Form.Item
                name="bankName"
                label="Bank Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input showCount maxLength={50} />
            </Form.Item>

            <Form.Item
                name="branchName"
                label="Branch Name"
            >
                <Input showCount maxLength={50} required/>
            </Form.Item>

            <Form.Item
                name="bankAddress"
                label="Bank Address"
            >
                <TextArea showCount maxLength={150} required/>
            </Form.Item>

            <Form.Item
                name="DOP"
                label="Opening Date"
            >
                <DatePicker required/>
            </Form.Item>

            <Form.Item
                name="accountType"
                label="Account Type"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select required>
                    <Select.Option value="saving">Saving</Select.Option>
                    <Select.Option value="current">Current</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item /*{...tailLayout}*/ >
                <Button htmlType="button" onClick={onReset} style={{marginLeft:'3rem', width:'10rem'}} className="bg-blue-500 text-white">
                    Reset
                </Button>
                <Button type="primary" htmlType="submit" style={{marginLeft:'3rem', width:'10rem'}} className="bg-blue-500">
                    Add Bank
                </Button>
            </Form.Item>
        </Form>
    );
};
export default FormCom;