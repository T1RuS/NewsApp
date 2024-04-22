import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div>
                <Link to={'/'}>Домой</Link>
                <Link to={'/posts'}>Посты</Link>
            </div>
        </header>
    );
};

export default Header;