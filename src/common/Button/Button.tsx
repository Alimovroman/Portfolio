import React, {FC} from 'react';
import styleContainer from "../styles/Container.module.css";

type Props = {
    title: string
}
const Button: FC<Props> = ({title}) => {
    return (
        <div>
            <button className={styleContainer.button} type={"submit"}>{title}</button>
        </div>
    );
};

export default Button;