import React from 'react'
import { Card } from '../common/Card'
import { CardCustomTitle } from '../common/CardCustomTitle'
import { Title, Type } from '../common/Title'


export const Status = (props:{text:string}): JSX.Element => {


    


    return (
        <Card>
            <CardCustomTitle  title="وضعیت کنونی" subTitle="در چه مرحله‌ای هستیم"/>
            <Title type={Type.THIN} style={{color:"#00B928",fontSize:36}}>{props.text}</Title>
        </Card>
    )
}