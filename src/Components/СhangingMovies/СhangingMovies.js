import React from 'react';

import css from "./СhangingMovies.module.css"

const СhangingMovies = ({setPopular, Popular}) => {

    const PopularMovies = () => {
        setPopular(!Popular)
    }

    return (

        <div className={Popular ? css.changeMoviesActive : css.changeMovies}>
            <div onClick={() => PopularMovies()}>Popular movies</div>
        </div>
    );
};
export {СhangingMovies};