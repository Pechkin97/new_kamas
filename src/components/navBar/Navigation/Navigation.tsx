import React from 'react';
import s from '.././NavBar.module.css'
import {NavLink} from "react-router-dom";

const Navigation = (props: any) => {
    return (
        <div className={s.item}>
            <NavLink to={props.navItem} className={({isActive}) => isActive ? s.active : ""}>
                {props.navItem}
            </NavLink>
        </div>
    )
}

export default Navigation;

