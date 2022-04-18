import React from 'react';
import './NavBar.css';
import logo2 from '../../images/logo2.png';

function NavBar(props) {
    return (
        <div className='nav'>
            <img src={logo2} className="logo" alt="logo" />

            <h1 className='titulo'>Sunspot</h1>

            <ul className='menu'>
                <a href='#'>Plantas</a>
                <a href='#'>Semillas</a>
                <a href='#'>Sustratos</a>
            </ul>
        </div>
    );
}

export default NavBar;