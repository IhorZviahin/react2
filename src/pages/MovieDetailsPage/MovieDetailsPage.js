import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {MovieCard} from "../../Components";
import {genreService} from "../../services/genreService";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movie} = useSelector(state => state.movies);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        dispatch(moviesActions.getById({id}))
        genreService.getAllGenre().then(value => setGenre(value.data.genres))
    }, [])

    console.log(movie)

    return (
        <div>
            {movie && (<MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieDetailsPage};