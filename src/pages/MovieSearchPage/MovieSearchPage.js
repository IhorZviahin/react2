import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {MoviesList} from "../../Components";
import css from "../GetAllMoviePage/MoviePage.module.css";


const MovieSearchPage = () => {

    const dispatch = useDispatch();
    const {movieSearch, moviesBySearch} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesActions.searchMovie(movieSearch))
    }, [movieSearch])

    console.log(movieSearch)
    return (
        <div className={css.wrapper_movie}>
            {moviesBySearch.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieSearchPage};