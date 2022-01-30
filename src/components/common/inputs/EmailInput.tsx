import { Form, Input } from "antd";
import React from "react";
import { MailOutlined } from '@ant-design/icons';

export const EmailInput = (props:{required?: boolean}) => {

    return (
        <Form.Item
            name="email"
            rules = {[
                {
                pattern:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                message:'ایمیل صحیح نمی‌باشد',
                },
                {
                required: props.required ? props.required : false,
                message: 'این فیلد الزامی است',
                }
                
            ]}    
        >
            <Input size="large" placeholder="آدرس ایمیل" prefix={<MailOutlined />} />
        </Form.Item>
    )
}