import React from 'react';

const СhangingMovies = ({setPopular, Popular}) => {

    const PopularMovies = ()=>{
        if(Popular === true){
            setPopular(false)
        }
        if(Popular === false){
            setPopular(true)
        }
    }

    return (

        <div>
            <div onClick={()=>PopularMovies()}>Popular movies</div>
        </div>
    );
};
export {СhangingMovies};