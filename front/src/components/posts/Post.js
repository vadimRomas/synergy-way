import React, {useEffect, useState} from 'react';
import PostService from "./services";
import {Link} from "react-router-dom";

import CreatePost from "./CreatePost";

function Post() {
    const [posts, setPosts] = useState([]);
    let likes = 0

    useEffect(() => {
            new PostService().getPosts().then(res => setPosts(res.data))
        }
        , [])

    const like = (id) => {
        new PostService().like(id).then(r => console.log(r))
    }

    return (
        <div>
            {localStorage.getItem('token')
                ? <CreatePost/>
                : 'if you want to create a post log in'
            }
            <div>
                {posts.map(post => (<div key={post.id}>
                    <a className={'link'} href={post.link}>{post.title} ({post.link})</a>
                    <div className={'flex'}>
                        {post.liked_by.map(() => {
                            likes++
                        })}
                        <p>{likes}</p>
                        <button onClick={() => like(post.id)}>like</button>
                        <p>{post.author.username}</p>
                        <Link to={`/comments/${post.id}`}>comments</Link>
                    </div>
                </div>))}
            </div>
        </div>
    );
}


export default Post;