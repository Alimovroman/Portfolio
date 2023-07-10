import React, {FC} from 'react';
import s from './Skill.module.scss'

type PropsType = {
    title: string
    style?: {
        backgroundImage: string
    }
}
const Skill: FC<PropsType> = ({title, style}) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.icon} style={style}></div>
            <span className={s.itemTitle}>{title}</span>
        </div>
    );
};

export default Skill;