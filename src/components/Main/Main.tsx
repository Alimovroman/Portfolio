import React from 'react';
import style from './Main.module.scss'
import Title from "../../common/Title/Title";

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.text}>
                    <span className={style.description}>Hi There</span>
                    <Title title={'I`m Roman Alimov'} />
                    <p className={style.aboutMeText}>Frontend developer.</p>
                </div>
                <div className={style.photo}>
                    <img src={'#'} alt={'Photo'}/>
                </div>
            </div>
        </div>
    );
};

export default Main;