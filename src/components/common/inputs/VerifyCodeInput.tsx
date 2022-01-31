import { Form, Input } from "antd";
import React, {CSSProperties } from "react";
import { MobileOutlined } from '@ant-design/icons';

export const VerifyCodeInput = (props: { required?: boolean, placeholder?: string, onChange?: (e:any) => void ,style?: CSSProperties,size: "small" | "middle" | "large"}) => {

  return (
    <Form.Item
      name="token"
      rules={[
        {
          required: props.required ? props.required : false,
          message: 'این فیلد الزامی است',
        }
      ]}
      style={props.style}
    >
      <Input onChange={props.onChange} size={props.size} placeholder={props.placeholder} prefix={<MobileOutlined />} />
    </Form.Item>
  )
}
VerifyCodeInput.defaultProps = {
  placeholder: "نام کامل",
  size:"large"
};
