import React from 'react';
import s from "./myPost.module.css"
import Post from "./post/post";

const MyPost = (props: any) => {

    let postsElements = props.profile.postsData.map((el:{id: number, massage: string, likesCount: number}, pos:number) =>
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

