import React, {FC} from 'react';
import s from './Skill.module.scss'

type PropsType = {
    title: string
    info: string
    style?: {
        backgroundImage: string
    }
}
const Skill: FC<PropsType> = ({title, info, style}) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.icon} style={style}></div>
            <span className={s.itemTitle}>{title}</span>
            <span className={s.description}>
                {info}
            </span>
        </div>
    );
};

export default Skill;