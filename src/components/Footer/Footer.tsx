import React from 'react';
import style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>Roman Alimov</h2>
                <div className={style.socialNetworks}>
                    <div className={style.imgItem}>
                        <FontAwesomeIcon icon={faVk} onClick={() => window.open('https://vk.com/alimovroman')}/>
                    </div>
                    <div className={style.imgItem}>
                        <FontAwesomeIcon icon={faTelegram} onClick={() => window.open('https://t.me/Ali_Ramon')}/>
                    </div>
                    <div className={style.imgItem}>
                        <FontAwesomeIcon icon={faGithub} onClick={() => window.open('https://github.com/Alimovroman')}/>
                    </div>
                    {/*<div className={style.imgItem} onClick={() => window.open('https://vk.com/alimovroman')}>*/}
                    {/*    hh*/}
                    {/*</div>*/}
                </div>
                <span className={style.description}>2023 все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;