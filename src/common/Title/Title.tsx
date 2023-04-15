import React, {FC} from 'react';
import styleContainer from "../styles/Container.module.css";

type Props = {
    title: string
}
const Title:FC<Props> = ({title}) => {
    return (
        <div>
            <h2 className={styleContainer.title}>{title}</h2>
        </div>
    );
};

export default Title;