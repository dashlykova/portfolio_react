import React  from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
            <nav className="header" style ={header}>
                <ul>
                    <li><NavLink style={headerHome} activeStyle={{fontWeight: "bold"}} to='/'>Home </NavLink></li>
                    <li><NavLink to='/projects'>projects </NavLink></li>
                    <li><NavLink to='/work'>work </NavLink></li>
                    <li><NavLink to='/about'>about </NavLink></li>
                </ul>
            </nav>

        )   
}

const header = {
    position: 'absolute',
    width: '100%',
    height: '800px',
    background: '#E83F3F',
    margin: '0',
    padding: '0',

}

const headerHome = {

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '25px',
    letterSpacing: '-0.10em',
    color: '#E5E5E5',
    padding: '50px',
}

export default Header