import React from 'react';
import {useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useParams} from "react-router-dom";

const MovieSearchPage = () => {
    const {movie} = useParams();
// const {moviesBySearch, movieSearch} = useSelector(state=>state.movies);

    //await dispatch(moviesActions.searchMovie(movie))

console.log(movie)

    return (
        <div>
            MovieSearchPage
        </div>
    );
};

export {MovieSearchPage};