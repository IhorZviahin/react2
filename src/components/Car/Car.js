import React from 'react';

const Car = ({car:{id, model, price, year}}) => {
    return (
        <div>
            <div>{id}--{model} -- {price} -- {year}</div>
            <hr/>
        </div>
    );
};

export {Car};