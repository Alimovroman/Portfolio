import React, {FC} from 'react';
import style from './Title.module.scss';

type Props = {
    title: string
    titleColor?: string
}
const Title:FC<Props> = ({title, titleColor}) => {
    return (
        <div>
            <h2 className={style.title} style={{color: titleColor}}>{title}</h2>
        </div>
    );
};

export default Title;