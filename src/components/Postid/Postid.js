import React from 'react';

const Postid = ({SinglePosts}) => {

    const {id, title, body} = SinglePosts
    return (
        <div>
            <h3>{id}--{title}</h3>
            <div>{body}</div>
        </div>
    );
};

export {Postid};