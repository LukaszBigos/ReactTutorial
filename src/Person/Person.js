import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p>This is {props.name} and plays at {props.team} </p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;