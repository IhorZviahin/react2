import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {moviesActions} from "../../redux";

const SearchForm = () => {

    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const submit = async (movieSearch) => {
      await dispatch(moviesActions.movieSearch(movieSearch))
        navigate("/search")
    };


    return (

        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input type="text" {...register("movieSearch")}/>
                    <button>ok</button>
            </div>
        </form>

    );
};

export {SearchForm};


// placeholder={'search'}
//  <NavLink to={'movie/search'}></NavLink>