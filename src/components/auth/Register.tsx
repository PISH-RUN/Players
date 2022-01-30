import { Button, Divider,Form } from "antd";
import React from "react";
import { EmailInput } from "../common/inputs/EmailInput";
import { PhoneInput } from "../common/inputs/PhoneInput";
import { PasswordInput } from "../common/inputs/PasswordInput";
import { UsernameInput } from "../common/inputs/UsernameInput";

export const Register = () =>{

    const [form] = Form.useForm()

    return (
        <Form form={form} onFinish={() => console.log('asd')} >
            <Divider />
            <UsernameInput required />
            <EmailInput required />
            <PasswordInput required />
            <PhoneInput required />
            <Button size="large" type="primary" htmlType="submit">ورود</Button>
        </Form>
    )
}