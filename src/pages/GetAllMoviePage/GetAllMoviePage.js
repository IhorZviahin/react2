import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {GenreBlock, MoviesList, Pagination, СhangingMovies} from "../../Components";
import {genreService} from "../../services/genreService";
import css from "./MoviePage.module.css"

const GetAllMoviePage = () => {

    const {movies, total_pages, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const [genres, setGenres] = useState([]);
    const [Popular, setPopular] = useState(false);

    console.log(Popular)

    useEffect(() => {

        if (Popular === true) {
            dispatch(moviesActions.getPopular({page: query.get('page')}))
        } else {
            dispatch(moviesActions.getAll({page: query.get('page')}))
        }

    }, [query, Popular])

    useEffect(() => {
        genreService.getAllGenre().then(value => setGenres(value.data.genres))
    }, [])

    return (
        <div>
            <div className={css.wrapper_mainBloc}>
                <div>
                    {genres.map(genre => <GenreBlock key={genre.id} genre={genre}/>)}
                </div>

                <div className={css.wrapper_movie_and_categories}>
                    <div>
                        <СhangingMovies setPopular={setPopular} Popular={Popular}/>
                    </div>
                    <div className={css.wrapper_movie}>
                        {movies.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
                    </div>
                </div>

            </div>
            <div>
                <Pagination key={page} page={page} total_pages={total_pages} setQuery={setQuery}/>
            </div>
        </div>

    );
};
export {GetAllMoviePage};