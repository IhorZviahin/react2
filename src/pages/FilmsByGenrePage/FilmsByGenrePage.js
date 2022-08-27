import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {MoviesList, Pagination} from "../../Components";
import css from "../GetAllMoviePage/MoviePage.module.css"

const FilmsByGenrePage = () => {

    const {genreId} = useParams();
    const {moviesByGenres, total_pagesByGenres, pageByGenres} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenres({genreId, page: query.get('page')}))
    }, [query])

    return (
        <div>
            <div className={css.wrapper_movie}>
                {moviesByGenres.map(movieByGenres => <MoviesList key={movieByGenres.id} movie={movieByGenres}/>)}
            </div>
            <div>
                <Pagination key={pageByGenres} page={pageByGenres} total_pages={total_pagesByGenres}
                            setQuery={setQuery}/>
            </div>
        </div>
    );
};

export {FilmsByGenrePage};