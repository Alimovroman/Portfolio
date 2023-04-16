import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../../common/Title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={styleContainer.container + ' ' + style.skillsContainer}>
                {/*<h2 className={styleContainer.title}>Мои Скиллы</h2>*/}
                <Title title={'Мои Скиллы'} />
                <div className={style.skills}>
                    <Skill title={'React'} info={'Skill info'}/>
                    <Skill title={'HTML'} info={'Skill info'}/>
                    <Skill title={'CSS'} info={'Skill info'}/>
                    <Skill title={'CSS'} info={'Skill info'}/>
                    <Skill title={'CSS'} info={'Skill info'}/>
                    <Skill title={'CSS'} info={'Skill info'}/>
                    <Skill title={'CSS'} info={'Skill info'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;