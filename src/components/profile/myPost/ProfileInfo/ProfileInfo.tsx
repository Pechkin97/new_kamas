import React from 'react';
import s from "./ProfileInfo.module.css"

const Profile = (props: any) => {
    return (<div className={s.profile}>
            <div>
                <img src='https://avatars.mds.yandex.net/get-mpic/5209489/img_id2922647750227777800.jpeg/orig'
                     alt="description"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )

}

export default Profile;

