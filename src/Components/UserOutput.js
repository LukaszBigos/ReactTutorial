import React from 'react';
import './UserOutput.css';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>Enduro World Series {props.name}</p>
            <p>Redbull {props.name} Rampage</p>
        </div>
    )
};

export default userOutput;