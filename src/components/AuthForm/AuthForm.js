import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import {userService} from "../../services";
import {authActions} from "../../redux";

const AuthForm = () => {
    const {register, handleSubmit} = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        pathname === "/register" ? setIsLogin(false) : setIsLogin(true)
        // если путь /register то это не логинация а реестрация поэтому фолс, а в другом случае это лагинация поэтому тру
    }, [pathname])
    const submit = async (user) => {
        try {
            if (!isLogin) {
                await userService.create(user)
                navigate("/login")
            } else {
                await dispatch(authActions.login({user}))
            }
        } catch (e) {

        }
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