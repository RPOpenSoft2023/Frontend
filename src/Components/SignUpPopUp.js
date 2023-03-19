import { Button, Modal, InputNumber, Space } from 'antd';
import { useState } from 'react';
const App = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        //send OTP
        setOpen(true);
    };
    const handleOk = () => {
        //OTP verfication
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const [keyboard, setKeyboard] = useState(true);
    return (
        <>
            <Button type="link" onClick={showModal}>
                Send OTP
            </Button>
            <Modal
                open={open}
                title="Enter the OTP"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" loading={loading} onClick={handleOk}>
                        Verify
                    </Button>,
                ]}
                width={200}
            >
                <Space className='mb-3'>
                    <InputNumber min={0} max={99999} size='large'/>
                </Space>
            </Modal>

        </>
    );
};
export default App;