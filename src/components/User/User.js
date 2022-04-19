import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name, username} = user;

    return (
        <div>
            <h3>{id}--{name}--{username}</h3>
            <button>
                <Link to={id.toString()}> Details </Link>
            </button>
            <hr/>
        </div>
    );
};

export {User};