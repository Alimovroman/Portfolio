import React, {FC} from 'react';
import style from "./Button.module.scss";

type Props = {
    title: string
}
const Button: FC<Props> = ({title}) => {
    return (
        <div>
            <button className={style.button} type={"submit"}>{title}</button>
        </div>
    );
};

export default Button;