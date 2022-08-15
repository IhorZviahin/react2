import React, {useEffect, useState} from 'react';

import css from './Pagination.module.css'


const Pagination = ({page, total_pages = 500, setQuery}) => {

    const nextPage = () => {
        const nextPage = page + 1
        setQuery({page: `${nextPage}`})
    }
    const prevPage = () => {
        const prevPage = page - 1
        setQuery({page: `${prevPage}`})
    }

    return (
        <div>
            <button disabled={page === 1} onClick={prevPage}>prev</button>

            <button disabled={page === total_pages} onClick={nextPage}>next</button>
        </div>
    );
};

export {Pagination};