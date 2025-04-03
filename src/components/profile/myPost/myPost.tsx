import React from 'react';
import s from "./myPost.module.css"
import Post from "./post/post";

const MyPost = (props: any) => {

    let postsData = [
        {id: 1, massage: 'Hi? how are you?', likesCount: 12},
        {id: 2, massage: "It's my first post!", likesCount: 3}
    ]

    return (
        <div className={s.myPost}>
            <h5>My post</h5>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].massage} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].massage} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )

}

export default MyPost;

