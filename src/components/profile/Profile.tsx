import React from 'react';
import s from "./Profile.module.css"
import MyPost from "./myPost/myPost";
import ProfileInfo from "./myPost/ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPost profile={props.profile}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/>
        </div>
    )

}

export default Profile;

