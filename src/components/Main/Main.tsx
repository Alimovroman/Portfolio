import React, {FC, useCallback} from 'react';
import style from './Main.module.scss'
import Title from "../../common/Title/Title";
import Particles from "react-tsparticles";
import type {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import avatar from '../../assets/images/avatar.jpeg'
import ReactTypingEffect from 'react-typing-effect';
import {Tilt} from 'react-tilt';

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Main: FC = () => {


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
            <div>
                <Particles id={"tsparticles"}
                           className={style.particles}
                           options={
                               {
                                   fullScreen: {
                                       zIndex: -10,
                                       enable: false
                                   },
                                   fpsLimit: 120,
                                   particles: {
                                       color: {
                                           value: "#ffffff",
                                       },
                                       links: {
                                           color: "#ffffff",
                                           distance: 150,
                                           enable: true,
                                           opacity: 0.5,
                                           width: 1,
                                       },
                                       move: {
                                           direction: "none",
                                           enable: true,
                                           outModes: {
                                               default: "bounce",
                                           },
                                           random: false,
                                           speed: 1,
                                           straight: false,
                                       },
                                       number: {
                                           density: {
                                               enable: true,
                                               area: 800,
                                           },
                                           value: 80,
                                       },
                                       opacity: {
                                           value: 0.5,
                                       },
                                       shape: {
                                           type: "circle",
                                       },
                                       size: {
                                           value: {min: 1, max: 5},
                                       },

                                       zIndex: {
                                           random: false,
                                           opacityRate: 0.7
                                       }
                                   },

                                   detectRetina: true,
                               }

                           }

                           init={particlesInit}
                           loaded={particlesLoaded}
                />
            </div>
            <div className={style.mainContainer}>

                <div className={style.text}>
                    <span className={style.description}>Hi There</span>
                    <Title title={'I`m Roman Alimov'} titleColor={'#fff'}/>
                    <ReactTypingEffect
                        text={["Frontend developer."]}
                    />
                </div>
                <Tilt options={defaultOptions}>
                    <div className={style.photo}>
                        <img src={avatar} alt={'Photo'} className={style.avatar}/>
                    </div>
                </Tilt>
            </div>

        </div>
    );
};

export default Main;