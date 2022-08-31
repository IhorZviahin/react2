import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./header.module.css"
import {SearchForm, Theme, UserInfo} from "../Components";

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <div className={css.headertwo}>
                    <SearchForm/>
                    <Theme/>
                    <div>
                        <UserInfo/>
                    </div>
                </div>
            </div>
            <Outlet/>
            <div className={css.header}>
                Work by https://github.com/IhorZviahin
            </div>
        </div>
    );
};

export {Header};