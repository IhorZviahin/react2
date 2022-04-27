import React, {useEffect, useState} from 'react';
import {Outlet, useSearchParams} from "react-router-dom"

import {postsService} from "../../services";
import {Post} from "../../components";
import css from "./PostsPage.module.css"

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    let [query, setQuery] = useSearchParams({page: "1"});


    useEffect(() => {
        postsService.getAll(query.get("page")).then(({data}) => setPosts(data))
    }, [query])

    let postPage = () => {
        let page = query.get("page");
        page = +page -1
        setQuery({page:page.toString()})

    }

    let nextPage = () => {
        let page = query.get("page");
        page = +page +1
        setQuery({page:page.toString()})

    }
    let onePage = () => {
        setQuery({page:2})
    }

    return (
        <div className={css.wrapper}>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}
                <button onClick={() => postPage()}>post</button>
                <button onClick={() => onePage()}>2</button>
                <button onClick={() => nextPage()}>next</button>
            </div>
            <div className={css.outlet}><Outlet/></div>

        </div>

    );
};

export {PostsPage};