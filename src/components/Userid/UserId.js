import React from 'react';

const UserId = ({SingleUser}) => {
    const {id, name, username, email} = SingleUser
    return (
        <div>
            <h3>{id}--{name}--{username}</h3>
            <div>{email}</div>
        </div>
    );
};

export {UserId};