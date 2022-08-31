import React from 'react';
import {NavLink} from "react-router-dom";

import {StarsRating} from "../../Components";
import css from "./MovieList.module.css"

const MoviesList = ({movie}) => {

    const {id, original_title, release_date, poster_path, vote_average} = movie;

    return (
        <div className={css.wrapper_cardMovie}>

            <div>
                <NavLink to={`${id}`}>
                    <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster"/>
                </NavLink>
            </div>

            <div className={css.name}>
                <NavLink to={`${id}`}>
                    {original_title}
                </NavLink>
            </div>

            <div className={css.release_date}>
                Date: {release_date}
            </div>

            <div className={css.StarsRating}><StarsRating vote_average={vote_average}/>  {vote_average}</div>
        </div>
    );
};

export {MoviesList};