import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {moviesActions} from "../../redux";
import css from "../MoviesList/MovieList.module.css";

const SearchForm = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();

    const submit = async (movie) => {
        dispatch(moviesActions.movieSearch(movie))
    };


    return (

        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input type="text" {...register("movie")}/>
                    <button>ok</button>
            </div>
        </form>

    );
};

export {SearchForm};


// placeholder={'search'}
//  <NavLink to={'movie/search'}></NavLink>