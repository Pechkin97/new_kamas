import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const NavBar = (props: any) => {

    let sidebarNavigation = props.sidebar.navigation.map((el: { id: number, pageName: string }, key: number) => {
        <Navigation key={key} navItem={el.pageName}/>
    })

    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to='profile' className={({isActive}) => isActive ? s.active : ""}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='dialogs' className={({isActive}) => isActive ? s.active : ""}>Massages</NavLink>
            </div>
            {/*            <div className={s.item}>
                <a href='news'>News</a>
            </div>
            <div className={s.item}>
                <a href='music'>Music</a>
            </div>
            <div className={s.item}>
                <a href='settings'>Settings</a>
            </div>*/}
        </div>
    )

}

export default NavBar;

