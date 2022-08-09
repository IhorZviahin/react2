import React from 'react';
import {AuthForm} from "../../components";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <AuthForm/>
            <Link to={"/register"}> register </Link>
        </div>
    );
};

export {LoginPage};