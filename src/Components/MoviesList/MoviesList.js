import React from 'react';
import { NavLink} from "react-router-dom";

import css from "./MovieList.module.css"

const MoviesList = ({movie}) => {

    const {id, original_title, overview, poster_path} = movie;

    return (
        <div className={css.wrapper_cardMovie}>
            <NavLink to={`${id}`}>
                <div>
                    <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/></div>
                <h2>{original_title}</h2>
            </NavLink>
            {/*<div>{overview}</div>*/}
        </div>
    );
};

export {MoviesList};