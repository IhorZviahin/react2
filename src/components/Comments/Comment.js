import React from 'react';

const Comment = ({comment: {id, name, email}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{name}--{email}</div>
        </div>
    );
};

export default Comment;