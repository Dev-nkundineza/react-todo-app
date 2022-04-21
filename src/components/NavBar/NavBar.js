import React from 'react'; 
import Logo from '../../images/logo512.png';
import classes from './NavBar.css'; 

const NavBar = () =>{
    return (
        <div className={classes.Menu}>
            <img src={Logo} alt="image"/>
            <h2>TODO App</h2>
            <ul>
                <li>check todos</li>
                <li>Login</li>
            </ul>
        </div>
    );
}

export default NavBar;