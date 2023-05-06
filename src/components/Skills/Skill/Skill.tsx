import React, {FC} from 'react';
import style from './Skill.module.scss'

type PropsType = {
    title: string
    info: string
}
const Skill: FC<PropsType> = ({title, info}) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}></div>
            <span className={style.itemTitle}>{title}</span>
            <span className={style.description}>
                {info}
            </span>
        </div>
    );
};

export default Skill;