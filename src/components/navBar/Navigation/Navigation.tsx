import React from 'react';
import s from '.././NavBar.module.css';
import {NavLink} from "react-router-dom";

const Navigation = (props: any) => {
    return (
        <NavLink to={props.navItem}>
            {({isActive}) => (
                <div className={isActive ? s.active : ""}>{props.navItem}</div>
            )}

        </NavLink>

    )
}

export default Navigation;

