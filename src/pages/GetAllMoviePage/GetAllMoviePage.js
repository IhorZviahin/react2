import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {GenreBlock, MoviesList, Pagination} from "../../Components";
import {genreService} from "../../services/genreService";
import css from "./MoviePage.module.css"

const GetAllMoviePage = () => {

    const {movies, total_pages, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        dispatch(moviesActions.getAll({page: query.get('page')}))
        genreService.getAllGenre().then(value => setGenres(value.data.genres))
    }, [query])

    return (
        <div>
            <div className={css.wrapper_mainBloc}>
                <div>
                    {genres.map(genre => <GenreBlock key={genre.id} genre={genre}/>)}
                </div>
                <div>
                    {movies.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
                </div>
            </div>
            <div>
                <Pagination key={page} page={page} total_pages={total_pages} setQuery={setQuery}/>
            </div>
        </div>

    );
};
export {GetAllMoviePage};