import React from 'react';
import s from "./myPost.module.css"
import Post from "./post/post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPost = (props: any) => {

    let postsElements = props.profile.postsData.map((el: {
            id: number,
            massage: string,
            likesCount: number
        }, pos: number) =>
            <Post key={pos} message={el.massage} likesCount={el.likesCount}/>
    );

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch();
    };

    let onPostChange = () => {
        let text = (newPostElement.current as HTMLTextAreaElement).value;
        props.dispatch(text);

    }

    return (
        <div className={s.myPost}>
            <h5>My post</h5>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.profile.newPostText}/>
            </div>
            <div>
                <button onClick={() => {
                    addPost()
                }}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPost;

