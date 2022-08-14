import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MoviesList} from "../../Components";

const GetAllMoviePage = () => {

    const {movies} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll({page: query.get('page')}))
    }, [query])

    const nextPage = () => {
        const nextPage = +query.get('page') + 1
        setQuery({page: `${nextPage}`})
    }
    const prevPage = () => {
        const prevPage = +query.get('page') - 1
        setQuery({page: `${prevPage}`})
    }

    return (
        <div>
            {movies.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            <div>
                <button disabled={nextPage === 0} onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
            </div>
        </div>

    );
};

export {GetAllMoviePage};