import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postsService} from "../../services";
import {Postid} from "../../components";

const SinglePostsPage = () => {

    const [SinglePosts, SetSinglePosts] = useState(null)
    const {id} = useParams()
    let {state} = useLocation();

    useEffect(() => {
        if (!state) {
            postsService.getById(id).then(({data}) => SetSinglePosts(data))
        } else {
            SetSinglePosts(state)
        }
    }, [id, state])


    return (
        <div>
            {SinglePosts && <Postid SinglePosts={SinglePosts}/>}
        </div>
    );
};

export {SinglePostsPage};