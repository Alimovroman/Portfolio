import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../../common/styles/Container.module.scss'
import vk from '../../assets/images/vk.svg';
import telegram from '../../assets/images/telegram.svg';
import linkidin from '../../assets/images/linkidin.svg';
import instagram from '../../assets/images/instagram.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={`${styleContainer.title} ${style.title}`}>Roman Alimov</h2>
                <div className={style.socialNetworks}>
                    <div className={style.imgItem}>
                        <FontAwesomeIcon icon={faVk}/>
                    </div>
                    <div className={style.imgItem}>
                        <FontAwesomeIcon icon={faTelegram}/>
                    </div>
                    <div className={style.imgItem}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                    <div className={style.imgItem}>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </div>
                </div>
                <span className={style.description}>2023 все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;