import React, {FC} from 'react';
import style from  './Work.module.css'

type PropsType ={
    title: string
    image: string
    description: string
}
const Work: FC<PropsType> = ({title, image, description}) => {
    return (
        <div className={style.workItem}>
            <div className={style.imageContainer}>
                <a href={'#'}>Посмотреть</a>
            </div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    );
};

export default Work;