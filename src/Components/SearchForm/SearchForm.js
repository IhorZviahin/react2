import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useSearchParams} from "react-router-dom";
import {moviesActions} from "../../redux";

const SearchForm = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);

    const submit = (movie) => {
        dispatch(moviesActions.searchMovie( {movie, page: query.get('page')}))
        console.log(movie)
    };

    console.log(movies)

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input type="text" {...register("movie")}/>
                {/*<NavLink to={'movie/search'}>*/}
                    <button>ok</button>
                {/*</NavLink>*/}
            </div>
        </form>
    );
};

export {SearchForm};



// placeholder={'search'}
//  <NavLink to={'movie/search'}></NavLink>