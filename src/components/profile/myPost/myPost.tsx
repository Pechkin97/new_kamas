import React from 'react';
import s from "./myPost.module.css"
import Post from "./post/post";

const MyPost = (props:any) => {
    return (
        <div>
        My post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi? how are you?' likesCount={7} />
            <Post message="It's my first post!" likesCount={0} />
        </div>
    </div>
)

}

export default MyPost;

