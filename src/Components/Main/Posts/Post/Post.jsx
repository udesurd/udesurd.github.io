import React from "react";
import './Post.css'

function Post ({post, id}) {
    return (
        <div className="posts_wrapper">
            <div className="posts">
                <a href={`/post${id}`}> <img src={post} className="post"/></a>
            </div>
        </div>
    )
}
export default Post;