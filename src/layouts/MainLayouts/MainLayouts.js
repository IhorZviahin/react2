import React from 'react';
import {Outlet} from "react-router-dom"

import {CarForm} from "../../components";

const MainLayouts = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};