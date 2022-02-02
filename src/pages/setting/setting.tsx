import React, { FC } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  notification,
  PageHeader,
  Radio,
  Row,
} from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import moment from 'jalali-moment';
import locale from 'antd/es/date-picker/locale/fa_IR';
import './setting.less';
import { useParticipant, useUpdateParticipant } from '../../hooks';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const Setting: FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: participant, isLoading, refetch } = useParticipant();
  const { mutateAsync: updateMe, isLoading: isUpdateLoading } = useUpdateParticipant({
    onSuccess: (res: any) => {
      navigate('/dashboard/main');
      queryClient.invalidateQueries('participants', {}, {});
      notification.success({
        message: 'اطلاعات شما بروز شد',
        placement: 'bottomLeft',
      });
    },
  });

  const handleSubmit = async (values: any) => {
    await updateMe({
      ...values,
      equipment: values.equipment?.join(','),
      abilities: values.abilities?.join(','),
      birthdate:
        !!values.year && !!values.month && !!values.day
          ? moment(`${values.year}-${values.month}-${values.day}`, 'jYYYY-jMM-jDD').locale('en').format('YYYY-MM-DD')
          : undefined,
      day: undefined,
      month: undefined,
      year: undefined,
    });
    refetch();
  };

  if (isLoading) {
    return <SyncOutlined className="setting-loading" spin />;
  }

  const me = participant?.data?.users_permissions_user || {};

  return (
    <Form
      onFinish={handleSubmit}
      labelCol={{ flex: '100px' }}
      initialValues={{
        ...me,
        equipment: me?.equipment?.split(','),
        abilities: me?.abilities?.split(','),
        day: me?.birthdate ? moment.utc(new Date(me.birthdate)).format('jDD') : undefined,
        month: me?.birthdate ? moment.utc(new Date(me.birthdate)).format('jMM') : undefined,
        year: me?.birthdate ? moment.utc(new Date(me.birthdate)).format('jYYYY') : undefined,
      }}
    >
      <Row id="settings" gutter={[20, 20]}>
        <Col span={24}>
          <PageHeader
            className="page-header"
            title="حساب کاربری"
            extra={
              <Button htmlType="submit" type="primary" loading={isUpdateLoading}>
                ذخیره
              </Button>
            }
          />
        </Col>
        <Col span={14}>
          <Card title="اطلاعات شخصی" className="personal-detail card">
            <Form.Item label="نام" name="firstName">
              <Input />
            </Form.Item>
            <Form.Item label="نام خانوادگی" name="lastName">
              <Input />
            </Form.Item>
            <Form.Item label="جنسیت" name="gender">
              <Radio.Group
                options={[
                  {
                    label: 'خانوم',
                    value: 'female',
                  },
                  {
                    label: 'آقا',
                    value: 'male',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="وضعیت تاهل" name="maritalStatus">
              <Radio.Group
                options={[
                  {
                    label: 'مجرد',
                    value: 'single',
                  },
                  {
                    label: 'متاهل',
                    value: 'married',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="تعداد فرزند" name="children">
              <InputNumber />
            </Form.Item>
            <Form.Item label="آدرس ایمیل" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="تاریخ تولد">
              <Input.Group compact>
                <Form.Item name="day" noStyle>
                  <Input style={{ width: 40 }} placeholder="روز" />
                </Form.Item>
                <Form.Item name="month" noStyle>
                  <Input style={{ width: 40 }} placeholder="ماه" />
                </Form.Item>
                <Form.Item name="year" noStyle>
                  <Input style={{ width: 60 }} placeholder="سال" />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item label="مدرک تحصیلی" name="degree">
              <Input />
            </Form.Item>
            <Form.Item label="رشته تحصیلی" name="fieldStudy">
              <Input />
            </Form.Item>
          </Card>
        </Col>
        <Col span={10}>
          <Row>
            <Card title="تجهیزات شخصی" className="card">
              <Form.Item name="equipment" initialValue={me.equipment && me.equipment.split(',')}>
                <Checkbox.Group>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="لپ تاپ">
                    لپ تاپ
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="گوشی هوشمند">
                    گوشی هوشمند
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="تبلت">
                    تبلت
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="اینترنت">
                    اینترنت
                  </Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </Card>
          </Row>
          <br />
          <Row>
            <Card title="توانمندی ها" className="card">
              <Form.Item name="abilities" initialValue={me.abilities && me.abilities.split(',')}>
                <Checkbox.Group>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="لپ گرافیک">
                    گرافیک
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="برنامه نویسی">
                    برنامه نویسی
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="تولید و تدوین محتوای ویدیویی">
                    تولید و تدوین محتوای ویدیویی
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="تولید و تدوین محتوای صوتی">
                    تولید و تدوین محتوای صوتی
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="آشنایی با شبکه های اجتماعی">
                    آشنایی با شبکه های اجتماعی
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="نگارش متن و تولید محتوا">
                    نگارش متن و تولید محتوا
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="مدیریت کسب و کار">
                    مدیریت کسب و کار
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="بازاریابی و تبلیفات">
                    بازاریابی و تبلیفات
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="تعلیم و تربیت">
                    تعلیم و تربیت
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="آموزش و پژوهش">
                    آموزش و پژوهش
                  </Checkbox>
                  <Checkbox style={{ width: '100%', marginBottom: 10 }} value="کسب و کار">
                    کسب و کار
                  </Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </Card>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default Setting;
