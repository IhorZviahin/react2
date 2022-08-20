import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {MovieCard} from "../../Components";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movie} = useSelector(state => state.movies);

    console.log(id)

    useEffect(() => {
        dispatch(moviesActions.getById({id}))
    }, [])

    console.log(movie)

    return (
        <div>
            {movie && (<MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieDetailsPage};