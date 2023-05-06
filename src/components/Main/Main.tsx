import React, {useCallback} from 'react';
import style from './Main.module.scss'
import Title from "../../common/Title/Title";
import Particles from "react-tsparticles";
import type {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";

const particlesOpt = {

    interactivity: {
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            // direction: "none",
            // enable: true,
            // outMode: "bounce",
            // random: false,
            // speed: 6,
            // straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            random: true,
            value: 5
        }
    }

}

const Main = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <div className={style.mainBlock}>
            <Particles id={"tsparticles"}
                       className={style.particles}
                       options={particlesOpt}
                       init={particlesInit}
                       loaded={particlesLoaded}
            />
            <div className={style.mainContainer}>
                <div className={style.text}>
                    <span className={style.description}>Hi There</span>
                    <Title title={'I`m Roman Alimov'} titleColor={'#fff'}/>
                    <p className={style.aboutMeText}>Frontend developer.</p>
                </div>
                <div className={style.photo}>
                    <img src={'#'} alt={'Photo'}/>
                </div>
            </div>
        </div>
    );
};

export default Main;