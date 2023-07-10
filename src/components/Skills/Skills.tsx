import React from 'react';
import style from './Skills.module.scss'
import Skill from "./Skill/Skill";
import Title from "../../common/Title/Title";
import reactImg from '../../assets/images/react.png'
import reduxImg from '../../assets/images/redux.jpg'
import restApiImg from '../../assets/images/restApi.jpg'
import tsImg from '../../assets/images/TS.png'
import jsImg from '../../assets/images/js.jpg'
import gitImg from '../../assets/images/git.jpg'
import htmlImg from '../../assets/images/html.png'
import cssImg from '../../assets/images/css.jpg'
import sassImg from '../../assets/images/sass.jpg'

const reactBgImage = {
    backgroundImage: `url(${reactImg})`,
    // backgroundRepeat: 'no-repeat',

}
const reduxBgImage = {
    backgroundImage: `url(${reduxImg})`,
    // backgroundRepeat: 'no-repeat',

}
const restApiBgImage = {
    backgroundImage: `url(${restApiImg})`,
}
const tsBgImage = {backgroundImage: `url(${tsImg})`}
const jsBgImage = {backgroundImage: `url(${jsImg})`}
const gitBgImage = {backgroundImage: `url(${gitImg})`}
const htmlBgImage = {backgroundImage: `url(${htmlImg})`}
const cssBgImage = {backgroundImage: `url(${cssImg})`}
const sassBgImage = {backgroundImage: `url(${sassImg})`}

const Skills = () => {
    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                {/*<h2 className={styleContainer.title}>Мои Скиллы</h2>*/}
                <Title title={'Мои Скиллы'} />
                <div className={style.skills}>
                    <Skill title={'React'} style={reactBgImage}/>
                    <Skill title={'Redux'} style={reduxBgImage}/>
                    <Skill title={'Rest Api'} style={restApiBgImage}/>
                    <Skill title={'TypeScript'} style={tsBgImage}/>
                    <Skill title={'JavaScript'} style={jsBgImage}/>
                    <Skill title={'Git'} style={gitBgImage}/>
                    <Skill title={'HTML'} style={htmlBgImage}/>
                    <Skill title={'CSS'} style={cssBgImage}/>
                    <Skill title={'SASS'} style={sassBgImage}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;