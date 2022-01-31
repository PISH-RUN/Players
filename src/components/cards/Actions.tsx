import { Button, Col, Row, Typography } from 'antd';
import React from 'react';
import { Card } from '../common/Card';
import { Title, Type } from '../common/Title';
import './styles/Actions.less';

export type ActionProps = {
  links?: Array<any>;
}

export const Actions = ({ links }: ActionProps): JSX.Element => {
  console.log(links);
  if (!links || links.length === 0) return <></>;

  return (
    <Card style={{ paddingBottom: 8}}>
      <Title type={Type.MEDIUM} style={{ color: '#1890FF' }}>اقدامات</Title>
      <Row gutter={[0, 7]}>
        {links?.map((link) => <Col xs={24}><Typography.Link style={{ width: '100%', display: 'block', background: link.color, textAlign: 'center', padding: '9px 0', color: '#fff' }} href={link.href}
                                                            className='green-btn'>{link.title}</Typography.Link></Col>)}
      </Row>
    </Card>
  );
};
