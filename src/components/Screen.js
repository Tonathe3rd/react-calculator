import React from 'react';
import "./Screen.css"

//text is the values typed on the screen
//result is the value on the screen after clicking on equalto "="
const Screen = ({text, result}) => {
    return( 
        <div className="calcScreen">
            <div className="result">
                <h1>{result}</h1>
            </div>
            <div className="text">
                <h3>{text}</h3>
            </div>
        </div>
    );
};

export default Screen