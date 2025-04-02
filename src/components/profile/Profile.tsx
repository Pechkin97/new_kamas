import React from 'react';
import s from "./Profile.module.css"
import MyPost from "./myPost/myPost";

const Profile = (props:any) => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://avatars.mds.yandex.net/get-mpic/5209489/img_id2922647750227777800.jpeg/orig' alt="description"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPost/>
        </div>
    )

}

export default Profile;

