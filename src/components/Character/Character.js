import React from 'react';

const Character = ({character}) => {
    const {name, status, species, gender, image} = character;
    return (
        <div>
            <div>
                <img src={image} alt={name}/>
            </div>
            <div>
                <h1>{name}</h1>
                <h1>{status}</h1>
                <h1>{species}</h1>
                <h1>{gender}</h1>
            </div>
        </div>
    );
};

export {Character};