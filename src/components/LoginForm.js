import { Modal } from 'antd';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin } from '../store';
import axios from 'axios';
const LoginForm = memo(({ isModalOpen, setIsModalOpen }) => {

    const user_info = useSelector((state) => state?.user_info)
    const dispatch = useDispatch()
    const handleOk = () => {
        const params = {
            username: 'emilys',
            password: 'emilyspass'
        }
        setIsModalOpen(false);
        dispatch(setUserLogin(params));
        
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if(user_info && user_info?.accessToken) {
            axios.defaults.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + ' ' + user_info?.accessToken
            }
        }
    },[user_info])
    return (
        <>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
});
export default LoginForm;