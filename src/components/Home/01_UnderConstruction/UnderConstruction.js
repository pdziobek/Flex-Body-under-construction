import React from 'react';
import insta from '../../../assets/insta-icon.svg';
import './style.scss';
import UnderConstructionAnimation from "./Animation/UnderConstructionAnimation";
import Authors from "../02_Footer/Authors";

export default function UnderConstruction() {

    return (
        <>
            <section className="construction-container">
                {/*id="logo-animation"*/}
                <div className='logo-container'>
                    <h1 className="App-logo" id="logo-animation">Joziaaa</h1>
                    <h2 className="name" id="logo-animation">Justyna Rzeszut</h2>
                    <a href="https://www.instagram.com/joziaaa/?hl=pl">
                        <img className='insta-icon' src={insta} id="logo-animation"/>
                    </a>
                </div>
                <UnderConstructionAnimation/>
                <p className='construction-txt' id='construction-txt-animation'>Strona w budowie</p>
                <Authors className='authors'/>

            </section>
        </>
)
}
