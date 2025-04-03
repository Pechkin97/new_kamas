import React from 'react';
import s from "./myPost.module.css"
import Post from "./post/post";

const MyPost = (props: any) => {

    let postsData = [
        {id: 1, massage: 'Hi? how are you?', likesCount: 12},
        {id: 2, massage: "It's my first post!", likesCount: 3}
    ]

    let postsElements = postsData.map((el,pos) =>
        <Post key={pos} message={el.massage} likesCount={el.likesCount}/>
    )

    return (
        <div className={s.myPost}>
            <h5>My post</h5>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPost;

