import React, { useContext } from 'react';
import './NavBar.css';
import logo2 from '../../images/logo2.png';
import CardWidget from './CardWidget/CardWidget';
import { NavLink } from 'react-router-dom';
import CartContext from '../../store/cart-context';

function NavBar(props) {
    const cartCtx = useContext(CartContext);

    return (
        <div className='nav'>
            <NavLink to='/'><img src={logo2} className="logo" alt="logo" /></NavLink>

            <h1><NavLink to='/' className='titulo'>Sunspot</NavLink></h1>

            <ul className='menu'>
                <li><NavLink to='/category/plantas'>Plantas</NavLink></li>
                <li><NavLink to='/category/semillas'>Semillas</NavLink></li>
                <li><NavLink to='/category/sustratos'>Sustratos</NavLink></li>
            </ul>
            {(cartCtx.products.length > 0) && <CardWidget /> }
        </div>
    );
}

export default NavBar;