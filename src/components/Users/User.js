import React from 'react';

const User = ({user, getUserId}) => {
    return (
        <div>
            {user.id}--{user.name}

            <button onClick={() => {
                getUserId(user)
            }}>go
            </button>
        </div>
    );
};

export {User};