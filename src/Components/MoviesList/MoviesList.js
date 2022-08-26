import React from 'react';
import { NavLink} from "react-router-dom";

import {StarsRating} from "../../Components";
import css from "./MovieList.module.css"

const MoviesList = ({movie}) => {

    const {id, original_title, overview, poster_path, vote_average} = movie;

    return (
        <div className={css.wrapper_cardMovie}>
            <NavLink to={`${id}`}>
                <div>
                    <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/></div>
                <h2>{original_title}</h2>
                <div className={css.StarsRating}><StarsRating vote_average={vote_average}/> {vote_average}</div>
            </NavLink>
            {/*<div>{overview}</div>*/}
        </div>
    );
};

export {MoviesList};