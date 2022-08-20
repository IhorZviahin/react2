import React from 'react';
import {NavLink} from "react-router-dom";

const GenreBlock = ({genre}) => {
    const {name, id} = genre;
    return (
        <NavLink to={`/genre/${id}`}>
            <div>
                {name}
            </div>
        </NavLink>
    );
};

export {GenreBlock};