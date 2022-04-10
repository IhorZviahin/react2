import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "./User";
import "./users.css"
import {Userid} from "./Userid";


const Users = ({checkid}) => {

    const [users, setUsers] = useState([]);
    const [userid, setUserId] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, [])

    const getUserId = (user) => {
        setUserId(user)
    }

    return (
        <div className={'wrapper'}>
            <div>
                {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}
            </div>

            <div>
                {userid && <Userid key={userid.id} userid={userid} checkid={checkid}/>}
            </div>
        </div>

    );
};

export {Users};