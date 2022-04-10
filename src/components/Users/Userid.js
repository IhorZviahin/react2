import React from 'react';

const Userid = ({userid, checkid}) => {
    return (
        <div>
            {userid.id} -- <h1>{userid.name} -- {userid.username}</h1>
            <button onClick={()=>{
                checkid(userid.id)
            }}> go post</button>
        </div>

    );
};

export {Userid};