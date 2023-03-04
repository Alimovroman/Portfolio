import React, {FC} from 'react';
import style from './Skill.module.css'

type PropsType = {
    title: string
    info: string
}
const Skill: FC<PropsType> = ({title, info}) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <span className={style.description}>
                {info}
            </span>
        </div>
    );
};

export default Skill;