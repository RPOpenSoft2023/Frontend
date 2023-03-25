import React from 'react';
import PropTypes from "prop-types";
import { Button, Form, Input, DatePicker, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from 'axios';
import { useContext } from 'react';
import { BankingdetailsContext } from '../Contexts/bankingDetailsContext/bankingDetailsContext';
import { showToastMessage } from './Toast'; 

const FormCom = ( { handleCancel } ) => {
    
    const [BankingDetails, setBankingdetailsContext] = useContext(BankingdetailsContext);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        handleCancel()
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
        }
        let month = values.DOP.month()+1;
        if(values.DOP.month()+1 < 10){
            month = `0${values.DOP.month()+1}`
        }
        let date = values.DOP.date();
        if(values.DOP.date() < 10){
            date = `0${values.DOP.date()}`
        }
        const data = {
            "ifsc": values.ifsc,
            "account_number": values.account,
            "bank_name": values.bankName,
            "branch_name": values.branchName,
            "branch_address": values.bankAddress,
            "account_opening_date": `${values.DOP.year()}-${month}-${date}`,
            "account_type": values.accountType,
        }
        console.log(data)
        form.resetFields();
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_BANKING_API}/banking/api/create_account/`,
            headers: headers,
            data: data,
        })
        .then((response) => {
            console.log(response);
            // const dataobj = {
            //     key: index,
            //     Bank: values.bankName,
            //     AccountNo: element.account_number,
            //     IFSC: element.ifsc,
            //     Account_type: element.account_type,
            //     OpeningData:element.account_opening_date,
            //     BranchName:element.branch_name,
            //     BankAddress:element.bank_address
            //   };
            showToastMessage('Account Created Successfully', 'positive')
        })
        .catch((error) => {
            console.log(error);
            showToastMessage('Account Creation Failed', 'negative')
        })
        
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <>
        <Form
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
                colon={false}
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
        </>
    );
};

FormCom.propTypes = {
    handleCancel: PropTypes.func.isRequired,
};

export default FormCom;