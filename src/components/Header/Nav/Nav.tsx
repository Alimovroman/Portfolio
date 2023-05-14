import React, {FC} from 'react';
import style from './Nav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll"

const Nav: FC = () => {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                to={'main'}>
                Главная
            </Link>
            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                to={'skills'}>
                Скиллы
            </Link>
            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                to={'projects'}>
                Проекты
            </Link>
            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                to={'contacts'}>
                Контакты
            </Link>
        </div>
    );
};

export default Nav;