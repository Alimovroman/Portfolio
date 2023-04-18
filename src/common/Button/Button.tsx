import React, {FC} from 'react';
import style from "./Button.module.scss";

type Props = {
    title: string
    style?: {
        background: string
    }
}
const Button: FC<Props> = (props) => {
    return (
        <div>
            <button className={style.button} style={props.style} type={"submit"}>{props.title}</button>
        </div>
    );
};

export default Button;