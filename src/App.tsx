import React from 'react';
import style from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import FindJob from "./components/FindJob/FindJob";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <div className={style.emptyBlock}/>
            <Skills />
            <div className={style.emptyBlock}/>
            <Projects />
            <div className={style.emptyBlock}/>
            <FindJob />
            <div className={style.emptyBlock}/>
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
