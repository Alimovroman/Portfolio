import React, {FC} from 'react';
import style from './Work.module.scss'
import styleContainer from "../../../common/styles/Container.module.scss";
import Button from "../../../common/Button/Button";

type PropsType ={
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}

const styleButton = {
    background: 'white'
}
const Work: FC<PropsType> = (props) => {
    return (
        <div className={style.workItem}>
            <div className={style.imageContainer} style={props.style}>
                {/*<a href={'#'}>Посмотреть</a>*/}
                <Button title={'Посмотреть'} style={styleButton}/>
            </div>
            <h5 className={styleContainer.itemTitle}>{props.title}</h5>
            <span className={styleContainer.description}>{props.description}</span>
        </div>
    );
};

export default Work;