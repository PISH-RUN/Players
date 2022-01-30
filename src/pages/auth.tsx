import React, {useEffect} from 'react'
import { Auth } from '../components/auth/Auth'
import '../styles/const.less';
import {useAuth} from "../contexts/auth/auth";

import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
    const { isLogin } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate('/dashboard/main');
        }
    })

    if (isLogin) {
        return <></>;
    }

    return (
        <Auth  />
    )
}

export default AuthPage
