import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./header.module.css"
import {SearchForm, Theme, UserInfo} from "../Components";

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/">Movies</NavLink>

                <div className={css.headertwo}>
                    <SearchForm/>
                    <Theme/>
                    <div className={css.UserInfo}>
                        <UserInfo/>
                    </div>
                </div>

            </div>
            <Outlet/>
            <div className={css.header}>
                something
            </div>
        </div>
    );
};

export {Header};