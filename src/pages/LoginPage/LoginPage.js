import React, {useEffect} from 'react';
import {AuthForm} from "../../components";
import {Link, useSearchParams} from "react-router-dom";

const LoginPage = () => {
    const [query] = useSearchParams();
    localStorage.clear() // вообще неоходимо очищать поля токенов и бо может быть там и друга информация

    useEffect(()=>{
       console.log( "session end", !!query.get('ExpSession'))
    },[query])

    return (
        <div>
            <AuthForm/>
            <Link to={"/register"}> register </Link>
        </div>
    );
};

export {LoginPage};