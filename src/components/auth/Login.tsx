import { Divider, Form, Button, notification } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { PhoneInput } from "../common/inputs/PhoneInput";
import { useOPT } from '../../hooks/auth';
import {Title, Type} from "../common/Title";

interface loginProps {
    onSubmit: (phone: string) => void;
}

export const Login = (props: loginProps) => {
    const { mutate: sendCode, isLoading } = useOPT({
        onSuccess: (data: any, phone: string) => {
            props.onSubmit(phone);
            notification.success({
                message: 'کد ارسال شد',
                description: 'کد ورود برای شما ارسال شد',
                placement: 'bottomLeft',
            })
        }
    });
    const [form] = Form.useForm()

    const login = () => {
        let { phone } = form.getFieldsValue();
        if (phone[0] === '0') phone = '+98' + phone.slice(1, phone.length);
        else if (phone[0] === '9') phone = '+98' + phone;
        sendCode(phone);

    }
    return (
        <Form form={form} onFinish={login} >
            <Title type={Type.THIN} style={{fontSize:16, margin: '16px auto'}}>برای ورود به سامانه پیش ران، شماره موبایل خود را وارد نمایید</Title>
            <Divider />
            <PhoneInput required />
            <Button size="large" type="primary" htmlType="submit" loading={isLoading}>ارسال کد</Button>
        </Form>
    )
}
