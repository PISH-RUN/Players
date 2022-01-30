import React from 'react'
import { Auth } from '../components/auth/Auth'
import '../styles/const.less';
import { Wrapper } from '../components/common/Wrapper';
import { Type,Title } from '../components/common/Title';

const loginWithMobile: React.FC = () => {


    return (
        <Wrapper>
            <div className="main">
                <Title type={Type.MEDIUM}>ضمن خوش آمد گویی برای دسترسی به پنل با لپتاپ وارد شوید</Title>
            </div>
        </Wrapper>
    )
}

export default loginWithMobile
