import React from 'react';

const СhangingMovies = ({setAll, setPopular, Popular, all}) => {

    const PopularMovies = ()=>{
        if(Popular === true){
            setPopular(false)
        }
        if(Popular === false){
            setPopular(true)
        }
    }

    const AllMovi = () =>{
        if(all === true){
            setAll(false)
        }
        if(all === false){
            setAll(true)
        }
    }



    return (

        <div>
            <div onClick={()=>PopularMovies()}>Popular movies</div>
            <div onClick={()=>AllMovi()}>All</div>
        </div>
    );
};
export {СhangingMovies};