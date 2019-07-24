import React  from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
            <nav className="header" style={navHeader}>
                <ul className="list-reset flex">
                <li className="mr-6 border border-white"><NavLink className="no-underline" style={headerHome} activeStyle={{fontWeight: "bold"}} to='/'>Home </NavLink></li>
                    <li className="mr-6 border border-white"><NavLink className="no-underline" style={headerAbout} to='/about'>About </NavLink></li>
                    <li className="mr-6 border border-white"><NavLink className="no-underline" style={headerProjects} to='/projects'>Projects </NavLink></li>
                    <li className="mr-6 border border-white"><NavLink className="no-underline" style={headerWork} to='/work'>Work </NavLink></li>
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


const headerProjects = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '25px',
    letterSpacing: '-0.10em',
    color: '#E5E5E5',
    padding: '50px',
}

const headerWork = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '25px',
    letterSpacing: '-0.10em',
    color: '#E5E5E5',
    padding: '50px',
}

const headerAbout = {
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