import React, { useEffect, useState, useContext, onFocus } from 'react';
import '../style/myStyle.css'
import Logo from './logo/Earth Tone.png'
import HeaderMenu from './headerMenu.js'; 
import { MyContext } from '../components/contextItem.js';
import HamburgerIcon from '../images/icon/hamburger_menu_white.png';
import { Link } from 'react-router-dom'; 
import SecondaryHeaderBar from './SecondaryHeaderBar.js'; 
import SearchBar from '../searchBar/searchbar.js'; 

const Header = props => {
    const { getTeaData, desktopView } = useContext(MyContext)
    
    return (
        <div id="headerBar">
            <SecondaryHeaderBar />
            <div id="PrimaryHeaderBar">
                <Link to="/" id="LogoContainer"><img src={Logo} id="earthTonelogo" /></Link>
                <SearchBar data={getTeaData()} />
                {desktopView ?
                    <HeaderMenu />
                    :
                   null
                    }

            </div>
    </div>
    )
}

export default Header; 
