import React from 'react';

import './Info.css';

const Info = ({room}) => {

    return(
        <div className="Info">
            <div className="leftInnerContainer">
                <h3>Room: {room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><h2>X</h2></a>
            </div>
        </div>
    );

}

export default Info;