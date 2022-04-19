import React from 'react';
import {Outlet, NavLink} from "react-router-dom"

import css from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">Aboute</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};