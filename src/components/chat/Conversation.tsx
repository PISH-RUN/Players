import React,{useEffect,useRef} from 'react'
import { Message } from '../chat/Message'
import { DateDivider } from './DateDivider'
import './styles/Conversation.less'

export const Conversation = (props:{data:any}): JSX.Element => {

    let myRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // after new message 
        return () => {if(myRef && myRef.current) 
             myRef.current.scrollIntoView({ behavior: "smooth" })}
    }, [props])
    
    return (
        <div className="conversation">
            {
                props.data.map((item: any)=>{
                    return(
                        <>
                        <Message guest={item.guest} avatarSrc={item.avatar} text={item.text} />
                        <DateDivider date={item.date} />
                        </>
                    )    
                })
            }
            <div ref={myRef} />         
        </div>
    )
}