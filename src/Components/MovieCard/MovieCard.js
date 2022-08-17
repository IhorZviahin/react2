import React from 'react';

const MovieCard = ({movie}) => {
    const {original_title, overview, poster_path, genres} = movie;
    console.log(genres)
    return (
        <div>
            <h1>{original_title}</h1>
            <div className={'Info_block'}>
                <div><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/></div>
                <div>{overview}</div>
            </div>
        </div>
    );
};

export {MovieCard};