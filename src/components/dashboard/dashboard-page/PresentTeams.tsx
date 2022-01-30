import React from 'react';
import { TeamProgress } from '../../common/TeamProgress';
import { Title, Type } from '../../common/Title';
import { FileTextOutlined,HddOutlined,GoldOutlined,GiftOutlined,FolderAddOutlined } from '@ant-design/icons';
import './PresentTeams.less'

export const PresentTeams = (): JSX.Element => {

    return (
        <div className="present-teams">
            <Title type={Type.BOLD}>
                تیم‌های حاضر
            </Title>
            <div>
                <TeamProgress color="#8675FF" count="۵۰" percentage="70" text="تیم محتوا" icon={<FileTextOutlined />} />
                <TeamProgress color="#FF9065" count="۱۴" percentage="53" text="تیم فنی" icon={<HddOutlined />}/>
                <TeamProgress color="#FFC426" count="۱۴" percentage="48" text="تیم بازاریابی" icon={<GoldOutlined />} />
                <TeamProgress color="#00B928" count="۱۴" percentage="48" text="تیم پشتیبانی" icon={<GiftOutlined />}/>
                <TeamProgress color="#339AF0" count="۶۷" percentage="35" text="تیم اپراتوری" icon={<FolderAddOutlined />}/>
            </div>
        </div>

    )
}