import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {UserId} from "../../components";
import {usersService} from "../../services/user.service";

const SingleUserPage = () => {
    const [SingleUser, SetSingleUser] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        usersService.getById(id).then(({data}) => SetSingleUser(data))
    }, [id])

    console.log(id)
    console.log(SingleUser)

    return (
        <div>
            {SingleUser && <UserId SingleUser={SingleUser}/>}
        </div>
    );
};

export {SingleUserPage};