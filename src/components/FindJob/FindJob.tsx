import React from 'react';
import style from './FindJob.module.css'
import styleContainer from './../../common/styles/Container.module.css'

const FindJob = () => {
    return (
        <div className={style.FindJobBlock}>
            <div className={`${styleContainer.container} ${style.FindJobContainer}`}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <button>Нанять меня</button>
            </div>
        </div>
    );
};

export default FindJob;