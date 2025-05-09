import React from 'react';
import s from './NavBar.module.css'
import Navigation from "./Navigation/Navigation";
import NewMassages from "./NewMassages/NewMassages";
import BestFriends from "./BestFriends/BestFriends";

const NavBar = (props: any) => {

    let sidebarNavigation = props.sidebar.navigation.map((el: { id: number, pageName: string }, pos: number) =>
        <Navigation key={pos} navItem={el.pageName}/>
    )

    let sidebarNewMassages = props.sidebar.newMassages.map((el: { id: number, userName: string, userAvatar: string, massagesCount: number}, pos: number) =>
        <NewMassages key={pos} userAvatar={el.userAvatar} massagesCount={el.massagesCount}/>
    )

    let sidebarBestFriends = props.sidebar.bestFriends.map((el: {  id: number, userName: string, userAvatar: string}, pos: number) =>
        <BestFriends key={pos} userName={el.userName} userAvatar={el.userAvatar}/>
    )

    return (
        <div className={s.nav}>
            <div className={s.navigation}>
                {sidebarNavigation}
            </div>
            <div className={s.newMassages}>
                {sidebarNewMassages}
            </div>
            <div className={s.bestFriends}>
                {sidebarBestFriends}
            </div>
        </div>
    )

}

export default NavBar;

