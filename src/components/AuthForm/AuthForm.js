import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

const AuthForm = () => {
    const {register, handleSubmit} = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const {pathname} = useLocation();

    useEffect(() => {
        pathname === "/register" ? setIsLogin(false) : setIsLogin(true)
        // если путь /register то это не логинация а реестрация поэтому фолс, а в другом случае это лагинация поэтому тру
    }, [pathname])
    const submit = (user) => {

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={"username"} {...register("username")}/>
            <input type='text' placeholder={"password"}  {...register("password")}/>
            <button>{isLogin ? "login" : "register"}</button>
            <div>

            </div>
        </form>
    );
}

export {AuthForm};