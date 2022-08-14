import React from 'react';
import {Link} from "react-router-dom";

const MoviesList = ({movie}) => {
    const {id, original_title, overview, poster_path} = movie;
    return (
        <div>
            <div>
                <img src= {`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/></div>
            <h2>{original_title}</h2>
            <div>{overview}</div>

            <Link to={`${id}`}>
                <button>More</button>
            </Link>
        </div>
    );
};

export {MoviesList};