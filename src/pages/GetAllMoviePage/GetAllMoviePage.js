import React from 'react';
import {Outlet} from "react-router-dom";

const GetAllMoviePage = () => {
    return (
        <div>
            GetAllMoviePage
            <Outlet/>
        </div>
    );
};

export {GetAllMoviePage};