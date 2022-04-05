import React from 'react';

const User = ({user: {id, name, username}}) => {
    return (
        <div>
            {id}--{name}
            <div>{username}</div>
        </div>
    );
};

export default User;