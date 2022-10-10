import React from 'react';
import "./Button.css";

//sym are the button values
const Button = ({sym,color, BtnClick}) => {
    return <div 
    onClick={() => BtnClick(sym)}
    className="calcBtn" style={{backgroundColor: color}}>{sym}</div>
}



export default Button