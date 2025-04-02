import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = (props:any) => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to='profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='dialogs'>Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='settings'>Settings</NavLink>
            </div>
        </div>
    )

}

export default NavBar;

