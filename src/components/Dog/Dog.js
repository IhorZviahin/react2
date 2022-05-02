import React from 'react';
import {useDispatch} from "react-redux";

import {DogActions} from "../../redux";

const Dog = ({dog:{id,name}}) => {
    const dispatch = useDispatch();
    const Delete=()=>{
        dispatch(DogActions.deletDog(id));
    };
    return (
        <div>
            {id} --- {name}
            <button onClick={Delete}>Delete</button>
        </div>
    );
};

export {Dog};