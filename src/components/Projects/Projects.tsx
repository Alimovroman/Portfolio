import React from 'react';
import style from './Projects.module.scss';
import Work from "./Work/Work";
import Title from "../../common/Title/Title";
import socialNetworkImg from '../../assets/images/social-network.jpg'
import todolistImg from '../../assets/images/todolist.png'
import pizzaImg from '../../assets/images/Pizza.jpg'
import cardsImg from '../../assets/images/cards.jpg'

const socialNetwork = {
    backgroundImage: `url(${socialNetworkImg})`,
};
const todolist = {
    backgroundImage: `url(${todolistImg})`,
};
const pizza = {
    backgroundImage: `url(${pizzaImg})`
}
const cards = {
    backgroundImage: `url(${cardsImg})`
}

const Projects = () => {
    return (
        <div id={'projects'} className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title title={'Мои работы'}/>
                <div className={style.projects}>
                    <Work title={'Social Network'}
                          description={'ololololo lol ol o olo'}
                          style={socialNetwork}
                          path={'https://alimovroman.github.io/samurai-way-main/'}
                    />
                    <Work title={'Todolist'}
                          description={'ololololo lol ol o olo'}
                          style={todolist}
                          path={'https://alimovroman.github.io/todo-list/'}
                    />
                    <Work title={'Pizza'} description={'asdad'} style={pizza}
                          path={'https://alimovroman.github.io/React-Pizza/'}/>
                    <Work title={'Cards'} description={'asdad'} style={cards}
                          path={'https://alimovroman.github.io/cards/'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;