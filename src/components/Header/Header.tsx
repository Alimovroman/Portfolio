import React, {FC} from 'react';
import style from './Header.module.scss'
import Nav from "./Nav/Nav";

const Header: FC = () => {
    return (
        <div className={style.headerContainer}>
            <div className={style.header}>
                <Nav />
            </div>
        </div>

    );
};

export default Header;