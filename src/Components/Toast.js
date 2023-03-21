import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToastMessage = (message) => {
    toast.error(`${message} !`, {
        position: toast.POSITION.TOP_CENTER
    });
};

export {showToastMessage};