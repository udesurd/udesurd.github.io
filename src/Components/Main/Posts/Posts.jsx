import React from "react";
import Post from "./Post/Post";
import './Posts.css'
import post1 from "../../Img/post1.jpg"
import post2 from "../../Img/post2.jpg"
import post3 from "../../Img/post3.jpg"
import post4 from "../../Img/post4.jpg"
import post5 from "../../Img/post5.jpg"
import post6 from "../../Img/post6.jpg"

function Posts (){
    return(
        <div className="posts_wrapper">
            <Post post={post1} id={1}/>
            <Post post={post2} id={2}/>
            <Post post={post3} id={3}/>
            <Post post={post4} id={4}/>
            <Post post={post5} id={5}/>
            <Post post={post6} id={6}/>
            <Post post={post6} id={6}/>
            <Post post={post6} id={6}/>
            <Post post={post6} id={6}/>
        </div>
    )
}
export default Posts;