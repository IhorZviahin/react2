import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className={'header'}>
                <NavLink to="/">Movies</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {Header};