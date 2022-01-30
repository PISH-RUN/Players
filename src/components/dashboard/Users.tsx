import React, { useState, useEffect } from 'react';
import { Col, Radio, Row } from 'antd';
import { Size, useWindowSize } from '../../hooks/window-size';
import { MultiTitle } from '../common/MultiTitle';
import { Earth } from '../earth/Earth';
import '../../styles/const.less'
import './styles/User.less'
import { DashboardWrapper } from './DashboardWrapper';
import { usersData } from './users-data';
import { AvatarPin } from '../earth/AvatarPin';

export const Users = (): JSX.Element => {

    const windowSize: Size = useWindowSize()
    const [canvasSize, setCanvasSize] = useState<number>(0)
    const [radioButton, setRadioButton] = useState<string>('all')
    const [radio, setRadio] = useState<string>('all')
    const [data, setData] = useState<Array<{[key: string]: any}>>(usersData.all)

    useEffect(() => {

        if (windowSize.width && windowSize.height) {
            setCanvasSize((windowSize.width < windowSize.height ? windowSize.width : windowSize.height))
        }

    }, [windowSize, canvasSize]);


    const options = [
        { label: 'همه', value: 'all' },
        { label: 'فنی', value: 'technical' },
        { label: 'محتوا', value: 'content' },
        { label: 'بازاریابی', value: 'marketing' },
        { label: 'مدیریت', value: 'management' },

    ];
    const options2 = [
        { label: 'همه', value: 'all' },
        { label: 'حاضرین', value: 'present' },
        { label: 'غایبین', value: 'absent' },
    ];

    const userPins = data.map((user,index) => {
        return <AvatarPin key={index} userID={user.id} name={user.name} avatar={user.avatar} disabled={!user.present} />
    });


    return (
        <>
                <Earth pins={userPins} status="persons"/>
                <DashboardWrapper style={{width:"30%",right:0}}>
                    <Row style={{height: '100%'}}>
                        <Col md={24} style={{ paddingTop: 110, paddingRight: 75 }}>
                            <MultiTitle title="همراهان پیش‌ران" subTitle="کیدنید" description="۴۱۱ حاضر از ۴۶۲" style={{ top: 110, right: 37 }} />
                        </Col>
                        
                    </Row>
                    
                </DashboardWrapper>

            <div className="custom-radio">
                <Radio.Group
                    size="large"
                    options={options}
                    onChange={(e) => {
                        setRadioButton(e.target.value)
                        setData(usersData[e.target.value])
                    }}
                    value={radioButton}
                    optionType="button"
                />
                <Radio.Group options={options2} onChange={(e) => {
                    setRadio(e.target.value)
                    setData(usersData[e.target.value])
                }} 
                value={radio} className="radio-btn" />
            </div>
        </>
    )
}
