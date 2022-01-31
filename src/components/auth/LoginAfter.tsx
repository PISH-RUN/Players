import { Divider, Form, Button, Row, Col, Avatar, message, Modal, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectUserInfo, userPageSlice } from '../../redux/slices/user';
import { VerifyCodeInput } from '../common/inputs/VerifyCodeInput';
import { Title, Type } from '../common/Title';
import { useLogin } from '../../hooks/auth';
import { useAuth } from '../../contexts/auth/auth';
import AvatarImage from 'public/images/avatar-sample.png';

interface LoginAfterProps {
  phone: string;
}

export const LoginAfter = ({ phone }: LoginAfterProps) => {
  const { setLogin } = useAuth();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useLogin({
    onSuccess: (res: any) => {
      setLogin(res);
      navigate('/dashboard/main');
      notification.success({
        message: 'خوش آمدید',
        placement: 'bottomLeft',
      });
    },
    onError: () => {
      notification.error({
        message: 'کد وارد شده صحیح نمی باشد',
        placement: 'bottomLeft',
      });
    },
  });
  const [form] = Form.useForm();
  const [scannerVisible, setScannerVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  const { setUserInfo } = userPageSlice.actions;

  const onFinish = () => {
    const { token } = form.getFieldsValue();
    login({
      token: token,
      mobile: phone,
    });
    return;
    if (JSON.stringify(form.getFieldsValue()) === JSON.stringify({ password: '123' })) {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        navigate('/loginWithMobile');
      } else {
        navigate('/dashboard/main');
        // dispatch(setUserInfo(props.validUser))
      }
    } else message.error('کد وارد شده صحیح نمیباشد');
  };

  const openScanner = () => {
    setScannerVisible((state) => !state);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Avatar size={72} src={AvatarImage} />
      <Title type={Type.THIN} style={{ fontSize: 16, margin: '16px auto' }}>
        لطفا کد ورود ارسالی را وارد نمایید
      </Title>
      <Row gutter={[10, 10]}>
        <Col xs={24}>
          <VerifyCodeInput placeholder="کد ورودیه" required />
        </Col>
        <Col sm={24} xs={24}>
          <Button size="large" htmlType="submit" style={{ width: '100%' }} loading={isLoading} type="primary">
            ورود به سایت
          </Button>
        </Col>
        {/*<Col sm={12} xs={24}><Button onClick={openScanner} size="large" type="primary">اسکن بارکد</Button></Col>*/}
      </Row>
      <Modal visible={scannerVisible} onCancel={() => setScannerVisible(false)} maskClosable footer={null}></Modal>
    </Form>
  );
};
