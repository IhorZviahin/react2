import React, {useEffect, useState} from 'react';

import {postService} from "../../services";

const Posts = ({id}) => {

    const [posts, setposts] = useState({});

    useEffect(() => {
        postService.getid(id).then(value => setposts(value.data));
    }, [id])
    console.log(posts)
    return (

        <div>
            <h1>
                {posts.id}--{posts.title}
            </h1>
            <div>{posts.body}</div>
        </div>
    );
};

export {Posts};