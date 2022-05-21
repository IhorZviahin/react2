import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "../Episode/Episode";
import {episodeActions} from "../../redux/slices/episode.slice";
import css from './Episodes.module.css'

const Episodes = () => {
    const {episodes, prev, next} = useSelector(state => state.episodes);
    console.log(episodes)
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();
    console.log(query, setQuery)

    const nextPage = () => {
        const nextPage = +query.get('page') + 1
        setQuery({page:`${nextPage}`})
    }
    const prevPage = () => {
        const prevPage = +query.get('page') - 1
        setQuery({page:`${prevPage}`})
    }

    useEffect(() => {
        dispatch(episodeActions.getAll({page: query.get('page')}))
    }, [query])
    return (
        <div>
            <div className={css.wrapper_episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>

            <div className={css.button}>
                <button disabled={!prev} onClick={prevPage}>prev</button>
                <button disabled={!next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};