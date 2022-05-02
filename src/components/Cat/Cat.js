import React from 'react';
import {useDispatch} from "react-redux";

import {catActions} from "../../redux";

const Cat = ({cat: {id, name}}) => {
    const dispatch = useDispatch();
    const Delete = () => {
        dispatch(catActions.deletCat({id}));
    };
    return (
        <div>
            {id} --- {name}
            <button onClick={Delete}>Delete</button>
        </div>
    );
};

export {Cat};