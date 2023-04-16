import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container + ' ' + style.mainContainer}>
                <div className={style.text}>
                    <span>Hi THere</span>
                    <h1>I Am Jeffry Arron</h1>
                    <p>A Graphic Designer.</p>
                </div>
                <div className={style.photo}>
                    <img src={'#'} alt={'Photo'}/>
                </div>
            </div>
        </div>
    );
};

export default Main;