import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
          <div className={"header-side"}>
              <Link className={"header-link"} to={'/'}>Домой</Link>
              <Link className={"header-link"} to={'/posts'}>Посты</Link>
              <Link className={"header-link"} to={'/create-post'}>Посты</Link>
          </div>
      </header>
    );
};

export default Header;
