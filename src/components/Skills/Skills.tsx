import React from 'react';
import style from './Skills.module.scss'
import Skill from "./Skill/Skill";
import Title from "../../common/Title/Title";
import reactImg from '../../assets/images/react.png'
import reduxImg from '../../assets/images/redux.jpg'

const reactBgImage = {backgroundImage: `url(${reactImg})`}
const reduxBgImage = {backgroundImage: `url(${reduxImg})`}

const Skills = () => {
    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                {/*<h2 className={styleContainer.title}>Мои Скиллы</h2>*/}
                <Title title={'Мои Скиллы'} />
                <div className={style.skills}>
                    <Skill title={'React'} info={'Skill info'} style={reactBgImage}/>
                    <Skill title={'Redux'} info={'Skill info'} style={reduxBgImage}/>
                    <Skill title={'Rest Api'} info={'Skill info'}/>
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