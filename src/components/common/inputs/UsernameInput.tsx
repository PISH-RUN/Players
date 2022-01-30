import { Form, Input } from "antd";
import React, {CSSProperties } from "react";
import { UserOutlined } from '@ant-design/icons';

export const UsernameInput = (props: { required?: boolean, placeholder?: string, onChange?: (e:any) => void ,style?: CSSProperties,size: "small" | "middle" | "large"}) => {

    return (
        <Form.Item
            name="username"
            rules={[
                {
                    required: props.required ? props.required : false,
                    message: 'این فیلد الزامی است',
                }
            ]}
            style={props.style}
        >
            <Input onChange={props.onChange} size={props.size} placeholder={props.placeholder} prefix={<UserOutlined />} />
        </Form.Item>
    )
}
UsernameInput.defaultProps = {
    placeholder: "نام کامل",
    size:"large"
};