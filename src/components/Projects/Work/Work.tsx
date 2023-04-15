import React, {FC} from 'react';
import style from  './Work.module.css'
import styleContainer from "../../../common/styles/Container.module.css";
import Button from "../../../common/Button/Button";

type PropsType ={
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}
const Work: FC<PropsType> = (props) => {
    return (
        <div className={style.workItem}>
            <div className={style.imageContainer} style={props.style}>
                {/*<a href={'#'}>Посмотреть</a>*/}
                <Button title={'Посмотреть'} />
            </div>
            <h5 className={styleContainer.itemTitle}>{props.title}</h5>
            <span className={styleContainer.description}>{props.description}</span>
        </div>
    );
};

export default Work;