import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={styleContainer.container + ' ' + style.skillsContainer}>
                <h2 className={style.title}>Мои Скиллы</h2>
                <div className={style.skills}>
                    <Skill title={'React'} info={'Skill info'}/>
                    <Skill title={'HTML'} info={'Skill info'}/>
                    <Skill title={'CSS'} info={'Skill info'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;