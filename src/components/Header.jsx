import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThenContext';

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);
    const {theme, setTheme} = useContext(ThemeContext); 

    const handleClick = () => {
        setDarkMode(!darkMode);
        theme == 'ligth-theme' ? setTheme('dark-theme') : setTheme('ligth-theme')
    }

    return(
        <header>
            <h1>ReactHooks</h1>
            <button
            className={darkMode ? 'darkmode-btn' : 'lightmode-btn'}
            id="darkmode"
            type="button" 
            onClick={handleClick}
            >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    )
}

export default Header;