import React, { useContext } from 'react';
import '../style/myStyle.css'
import Logo from './logo/Earth Tone.png'
import HeaderMenu from './headerMenu.js'; 
import { MyContext } from '../context/contextItem.js';
import { Link } from 'react-router-dom'; 
import SecondaryHeaderBar from './SecondaryHeaderBar.js'; 
import SearchBar from '../searchBar/searchbar.js'; 

const Header = props => {
    const { getProductCollection, desktopView } = useContext(MyContext)
    
    return (
        <div id="headerBar">
            <SecondaryHeaderBar />
            <div id="PrimaryHeaderBar">
                <Link to="/" id="LogoContainer"><img src={Logo} id="earthTonelogo" /></Link>
                <SearchBar data={getProductCollection()} />
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
