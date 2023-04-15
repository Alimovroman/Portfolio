import React from 'react';
import style from './FindJob.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";

const FindJob = () => {
    return (
        <div className={style.FindJobBlock}>
            <div className={`${styleContainer.container} ${style.FindJobContainer}`}>
                {/*<h2 className={styleContainer.title}>Рассматриваю варианты удаленной работы</h2>*/}
               <Title title={'Рассматриваю варианты удаленной работы'} />
               <Button title={'Нанять меня'} />
                {/*<button className={styleContainer.button}>Нанять меня</button>*/}
            </div>
        </div>
    );
};

export default FindJob;