import React from "react";
import { Tabs } from 'antd';
import './styles/CustomTabs.less'

interface tabsType {
    key: string ;
    value: string
    content: JSX.Element | string
}

export const CustomTabs = (props: { className?: string, onSelected?: (e: string) => void, centered?: boolean, tabs: tabsType[] ,defaultKey?:string}): JSX.Element => {

    const { TabPane } = Tabs;
    const { className, onSelected, centered, tabs ,defaultKey} = props

    return (
        <Tabs defaultActiveKey={defaultKey ? defaultKey :tabs[0].key} onChange={onSelected} className={className ? className : "auth-choices"} centered={centered} >
            {
                tabs.map((item) => {
                    return (
                        <TabPane tab={item.value} key={item.key}>
                            {item.content}
                        </TabPane>
                    )
                })
            }
        </Tabs>
    )
}