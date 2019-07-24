import React  from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
            <nav className="header" style={navHeader}>
                <ul className="list-reset flex">
                    <li className="mr-6 border border-white"><NavLink style={headerHome} activeStyle={{fontWeight: "bold"}} to='/'>Home </NavLink></li>
                    <li className="mr-6 hover:bg-red"><NavLink to='/projects'>projects </NavLink></li>
                    <li className="mr-6 hover:bg-red"><NavLink to='/work'>work </NavLink></li>
                    <li className="mr-6 hover:bg-red"><NavLink to='/about'>about </NavLink></li>
                </ul>
            </nav>

        )   
}

const navHeader = {
    background: '#E83F3F',
}

const headerHome = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '25px',
    letterSpacing: '-0.10em',
    color: '#E5E5E5',
    padding: '50px',
}

export default Header