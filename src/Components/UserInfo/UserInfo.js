import React from 'react';

import css from "./userInfo.module.css"
import image from "./user.png"

const UserInfo = () => {

    return (
        <div>
            <img className={css.img} src={image} alt="user_logo"/>
        </div>
    );
};

export {UserInfo};