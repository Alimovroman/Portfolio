import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import Title from "../../common/Title/Title";

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container + ' ' + style.mainContainer}>
                <div className={style.text}>
                    <span className={styleContainer.description}>Hi THere</span>
                    <Title title={'I Am Jeffry Arron'} />
                    <p className={style.aboutMeText}>A Graphic Designer.</p>
                </div>
                <div className={style.photo}>
                    <img src={'#'} alt={'Photo'}/>
                </div>
            </div>
        </div>
    );
};

export default Main;