import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../../common/styles/Container.module.css';
import Work from "./Work/Work";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.projects}>
                    <Work title={'Project-1'} image={'#'} description={'ololololo lol ol o olo'} />
                    <Work title={'Project-2'} image={'#'} description={'ololololo lol ol o olo'} />
                </div>
            </div>
        </div>
    );
};

export default Projects;