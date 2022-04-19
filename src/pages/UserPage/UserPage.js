import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import {usersService} from "../../services/user.service";
import {User} from "../../components";
import css from "./UserPage.module.css"


const UserPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={css.wrapper}>
            <div >
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserPage};