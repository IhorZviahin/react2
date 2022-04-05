import React from 'react';

const Post = ({post: {id, userId, title}}) => {
    return (
        <div>
            <div>{id} -- {userId}</div>
            <div> {title} </div>
        </div>
    );
};

export default Post;