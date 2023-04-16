import React, {FC} from 'react';
import style from './Skill.module.scss'
import styleContainer from "../../../common/styles/Container.module.scss";

type PropsType = {
    title: string
    info: string
}
const Skill: FC<PropsType> = ({title, info}) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}></div>
            <span className={styleContainer.itemTitle}>{title}</span>
            <span className={styleContainer.description}>
                {info}
            </span>
        </div>
    );
};

export default Skill;