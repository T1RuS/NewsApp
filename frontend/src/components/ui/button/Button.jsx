import React from 'react';
import './button.css';

const Button = ({type, name}) => {
    return (
        <button className={'my-button'} type={type}>
            {name}
        </button>
    );
};

export default Button;