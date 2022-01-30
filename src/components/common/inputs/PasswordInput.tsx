import { Form, Input } from "antd";
import React from "react";
import { LockOutlined } from '@ant-design/icons';

export const PasswordInput = (props: { required?: boolean, placeholder?: string}) => {

    return (
        <Form.Item
            name="password"
            rules={[
                {
                    required: props.required ? props.required : false,
                    message: 'این فیلد الزامی است',
                }
            ]}
        >
            <Input.Password size="large" placeholder={props.placeholder} prefix={<LockOutlined />} />
        </Form.Item>
    )
}
PasswordInput.defaultProps = {
    placeholder:"کلمه عبور",
    
 };