import React from 'react';
import style from './Projects.module.scss';
import Work from "./Work/Work";
import Title from "../../common/Title/Title";
import socialNetworkImg from '../../assets/images/social-network.jpg'
import todolistImg from '../../assets/images/todolist.png'

const socialNetwork = {
    backgroundImage: `url(${socialNetworkImg})`,
};
const todolist = {
    backgroundImage: `url(${todolistImg})`,
};

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title title={'Мои работы'} />
                <div className={style.projects}>
                    <Work title={'Social Network'}
                          description={'ololololo lol ol o olo'}
                          style={socialNetwork}
                    />
                    <Work title={'Todolist'}
                          description={'ololololo lol ol o olo'}
                          style={todolist}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;