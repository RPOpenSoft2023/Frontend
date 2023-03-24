import React from 'react';
import { Button, Form, Input, DatePicker, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from 'axios';
import { useContext } from "react";
import { BankingdetailsContext } from "../Contexts/bankingDetailsContext/bankingDetailsContext";
const FormCom = () => {
    const [form] = Form.useForm();
    const [bankingDetails, setBankingDetails] = useContext(BankingdetailsContext);
    const onFinish = (values) => {
        // console.log('Success:', values);
        // console.log(`${values.DOP.date()}/${values.DOP.month()+1}/${values.DOP.year()}`);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
        }
        const data = {
            "ifsc": values.ifsc,
            "account_number": values.account,
            "bank_name": values.bankName,
            "branch_name": values.branchName,
            "bank_address": values.bankAddress,
            "account_opening_date": `${values.DOP.year()}-${values.DOP.month()+1}-${values.DOP.date()}`,
            "account_type": values.accountType,
            "phone_number": "1234567898",
        }
        console.log(data)
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_BANKING_API}/banking/api/create_account/`,
            headers: headers,
            data: data,
        })
        .then((response) => {
            console.log(response);
            // setBankingDetails([]);
            form.resetFields();
        })
        .catch((error) => {
            console.log(error);
        })
        
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
                name="ifsc"
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