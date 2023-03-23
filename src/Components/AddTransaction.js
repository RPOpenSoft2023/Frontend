import React from 'react';
import { Button, Form, Input, DatePicker, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { InboxOutlined } from '@ant-design/icons';

// const AddTransaction = () => {
//     const { Option } = Select;
//     // const layout = {
//     //     labelCol: {
//     //         span: 8,
//     //     },
//     //     wrapperCol: {
//     //         span: 16,
//     //     },
//     // };
//     // const tailLayout = {
//     //     wrapperCol: {
//     //         offset: 8,
//     //         span: 16,
//     //     },
//     // };
//     const [form] = Form.useForm();
//     const onFinish = (values) => {
//         console.log(values);
//     };
//     const onReset = () => {
//         form.resetFields();
//     };
//     return (
//         <Form
//             // {...layout}
//             form={form}
//             name="control-hooks"
//             onFinish={onFinish}
//             style={{
//                 maxWidth: 600,
//             }}
//         >
            
            
//             <Form.Item
//                 name="DOP"
//                 label="Transaction Date"
//             >
//                 <DatePicker required/>
//             </Form.Item>

//             <Form.Item
//                 name="bankName"
//                 label="Bank Name"
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//             >
//                 <Input showCount maxLength={50} />
//             </Form.Item>

//             <Form.Item
//                 name="branchName"
//                 label="Branch Name"
//             >
//                 <Input showCount maxLength={50} required/>
//             </Form.Item>

//             <Form.Item
//                 name="bankAddress"
//                 label="Bank Address"
//             >
//                 <TextArea showCount maxLength={150} required/>
//             </Form.Item>

//             <Form.Item /*{...tailLayout}*/ >
//                 <Button htmlType="button" onClick={onReset} style={{marginLeft:'3rem', width:'10rem'}} className="bg-blue-500 text-white">
//                     Reset
//                 </Button>
//                 <Button type="primary" htmlType="submit" style={{marginLeft:'3rem', width:'10rem'}} className="bg-blue-500">
//                     Add
//                 </Button>
//             </Form.Item>
//         </Form>
//     );
// };
// export default AddTransaction;


const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const onFinish = (values) => {
    console.log('Received values of form: ', values);
};


const AddTransaction = () => {
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
                Upload
            </Button>
        </Form.Item>
    </Form>
};

export default AddTransaction;


