import React, {useEffect, useState} from 'react';

import css from './Pagination.module.css'


const Pagination = ({page, total_pages , setQuery}) => {

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
<div>{page}</div>
<div>{total_pages}</div>
            <button disabled={page === total_pages} onClick={nextPage}>next</button>
        </div>
    );
};

export {Pagination};