import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MoviesList, Pagination} from "../../Components";

const GetAllMoviePage = () => {

    const {movies, total_pages, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getAll({page: query.get('page')}))
    }, [query])

    return (
        <div>

            {movies.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            <div>
                <Pagination key={page} page={page} total_pages={total_pages} setQuery={setQuery}/>
            </div>
        </div>

    );
};
export {GetAllMoviePage};