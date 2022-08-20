import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./header.module.css"
import {UserInfo} from "../Components";

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/">Movies</NavLink>
                <div className={css.UserInfo}>
                    <UserInfo/>
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