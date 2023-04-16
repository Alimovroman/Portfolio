import React, {FC} from 'react';
import style from './Title.module.scss';

type Props = {
    title: string
}
const Title:FC<Props> = ({title}) => {
    return (
        <div>
            <h2 className={style.title}>{title}</h2>
        </div>
    );
};

export default Title;