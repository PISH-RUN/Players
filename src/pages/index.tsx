import React, { useEffect } from 'react'
import '../styles/const.less'
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd'
import { Wrapper } from '../components/common/Wrapper'


const MainPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/auth')
    }, [])
    
    return (
        <Wrapper>
            <Spin size="large"/>
        </Wrapper>
    )
}

export default MainPage
