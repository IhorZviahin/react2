import React from 'react';

import css from "./Episode.module.css"
import {useNavigate} from "react-router-dom";

const Episode = ({episode:{name, air_date, episode, characters}}) => {
    const navigate = useNavigate();
    return (
        <div className={css.episode_wrapper} onClick={()=>navigate('/characters',{state:characters})}>
            <div>name: {name}</div>
            <div>air date: {air_date}</div>
            <div>episode: {episode}</div>
            <br/>
        </div>
    );
};

export {Episode};