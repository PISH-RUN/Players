import React, {useEffect, useState} from 'react'
import { Card } from '../common/Card'
import { Logo } from '../common/Logo'
import { CustomTabs } from '../common/CustomTabs'
import { Title, Type } from '../common/Title'
import { Login } from './Login'
import './styles/Auth.less'
import { Wrapper } from '../common/Wrapper'
import { CopyrightOutlined } from '@ant-design/icons';
import { Register } from './Register'
import { LoginAfter } from './LoginAfter'
import {notification} from "antd";




export const Auth = (props:{logged?: boolean}): JSX.Element => {
    const [phone,setPhone] = useState<string|undefined>()

    const [validUser,setValidUser] = useState<{email: string,password: string,rule:string}>(
        {
            email:"mobin@gmail.com",
            password:"123",
            rule:"admin"
        }
    )


    return (
        <Wrapper>
            <div className="main loginBox">
                <Logo subject />
                <Title type={Type.P} className="welcome-text" >.به پیش‌ران خوش آمدید، ابتدا لطفا وارد شوید</Title>
                <Card>
                    {!!phone ? <LoginAfter phone={phone}/> : <Login onSubmit={(phone:string) => setPhone(phone)}/>}
                </Card>
                <Title type={Type.P} className="copy-right" >تمامی حقوق محفوظ است Copyright <CopyrightOutlined /> 2021</Title>
            </div>
        </Wrapper>
    )
}