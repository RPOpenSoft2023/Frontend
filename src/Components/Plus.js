import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import {  Button, Form, Select, Upload } from 'antd';

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const onFinish = (values) => {
    console.log('Received values of form: ', values);
};

const Plus = () => (
    <Form
        name="upload"
        // {...formItemLayout}
        onFinish={onFinish}
        initialValues={{}}
        style={{
            maxWidth: 600,
        }}
    >
        <Form.Item >
            <Form.Item name="drag" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload.Dragger accept=".csv" name="file" action="/upload.do" maxCount={1}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Upload/Drag the file</p>
                </Upload.Dragger>
            </Form.Item>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                span: 12,
                offset: 17,
            }}
        >
            <Button type="primary" htmlType="submit" style={{width:'8rem'}} className="bg-blue-500" >
                Analyze
            </Button>
        </Form.Item>
    </Form>
);
export default Plus;