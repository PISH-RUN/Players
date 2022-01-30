import { Form, Input } from "antd";
import React from "react";
import { UserOutlined } from '@ant-design/icons';

export const PhoneInput = (props: { required?: boolean }) => {

    return (
        <Form.Item
            name="phone"
            rules={[
                {
                    required: props.required ? props.required : false,
                    message: 'این فیلد الزامی است',
                }
            ]} 
        >
            <Input size="large" addonAfter="98+" className="phone-input"/>
        </Form.Item>
    )
}