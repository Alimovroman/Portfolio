import React, {FC} from 'react';
import style from "./Button.module.scss";

type Props = {
    title: string
    style?: {
        background: string
    }
    path?: string
}
const Button: FC<Props> = (props) => {
    return (
        <div>
            <button className={style.button}
                    style={props.style}
                    type={"submit"}
                    onClick={() => window.open(props.path)}
            >{props.title}
            </button>
        </div>
    );
};

export default Button;