import React from 'react';
import {Link} from "react-router-dom";

const MoviesList = ({movie, genre}) => {
    const {id, original_title, overview, poster_path, genre_ids} = movie;

    console.log(genre_ids)

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