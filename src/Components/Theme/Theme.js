import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from "../../redux";

const Theme = () => {

    const {theme, colorTheme} = useSelector(state => state.theme);
    const dispatch = useDispatch();
    console.log(theme)
    const changecolor = () => {
        if (theme === true) {
            dispatch(themeActions.themeChange(false))
        }else {
            dispatch(themeActions.themeChange(true))
        }
    }

    return (
        <div onClick={changecolor}>
            Theme: {colorTheme}
        </div>
    );
};

export {Theme};