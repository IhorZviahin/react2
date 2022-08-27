import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MoviesList, Pagination} from "../../Components";
import css from "../GetAllMoviePage/MoviePage.module.css";


const MovieSearchPage = () => {

    const dispatch = useDispatch();
    const {movieSearch, moviesBySearch, total_pagesBySearch, pageBySearch} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});

    //movieSearch
    //{movieSearch, page: query.get('page')}
    useEffect(() => {
        dispatch(moviesActions.searchMovie(movieSearch, pageBySearch))
    }, [movieSearch, pageBySearch])

console.log(query.toString())
console.log(movieSearch)
    return (
        <div>
            <div className={css.wrapper_movie}>
                {moviesBySearch.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>

            <div>
                {<Pagination
                    key={pageBySearch}
                    page={pageBySearch}
                    total_pages={total_pagesBySearch}
                    setQuery={setQuery}/>}
            </div>
        </div>

    );
};

export {MovieSearchPage};