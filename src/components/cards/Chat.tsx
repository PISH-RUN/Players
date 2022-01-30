import React, { useState, useEffect } from 'react'
import { Conversation } from '../chat/Conversation'
import { Footer } from '../chat/Footer'
import { Card } from '../common/Card'
import './styles/Chat.less'
import { Form } from "antd";
import moment from 'jalali-moment';


type Message = {
    text: string,
    guest: boolean,
    avatar: string,
    date: string
}

export const Chat = (): JSX.Element => {

    const [form] = Form.useForm()

    const [data, setData] = useState<Array<Message>>(
        [
            {
                text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
                guest: false,
                avatar: "https://picsum.photos/48/48",
                date: "2021-12-02T09:36:06.247969+03:30"
            },
            {
                text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
                guest: true,
                avatar: "https://picsum.photos/48/48",
                date: "2021-12-02T09:36:06.247969+03:30"
            },
            {
                text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
                guest: false,
                avatar: "https://picsum.photos/48/48",
                date: "2021-12-02T09:36:06.247969+03:30"
            }
        ]
    )

    const sendMessage = () => {
        let obj = form.getFieldsValue()
        let temp: Message ={
            text: obj.text,
            guest: false,
            avatar: "https://picsum.photos/48/48",
            date: moment().toString(),
        }
        setData(data => [...data, temp])
        form.resetFields()
    }

    
    return (
        <Form form={form}>
            <Card chatHeader cardTitle="روح الله افضلی" avatarSrc="https://picsum.photos/48/48" className="chat-wrapper">
                <Conversation data={data} />
                <Footer onSend={sendMessage} />
            </Card>
        </Form>
    )
}