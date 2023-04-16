import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../../common/styles/Container.module.scss'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={`${styleContainer.title} ${style.title}`}>Roman Alimov</h2>
                <div className={style.socialNetworks}>
                    <div className={style.imgItem}>
                        <img src={'#'} alt={'hh'} />
                    </div>
                    <div className={style.imgItem}>
                        <img src={'#'} alt={'hh'} />
                    </div>
                    <div className={style.imgItem}>
                        <img src={'#'} alt={'hh'} />
                    </div>
                    <div className={style.imgItem}>
                        <img src={'#'} alt={'hh'} />
                    </div>
                </div>
                <span className={style.description}>2023 все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;