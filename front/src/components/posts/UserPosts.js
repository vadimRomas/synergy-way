import React, {useEffect, useState} from 'react';

import PostService from "./services";
import {Link} from "react-router-dom";

function UserPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
            new PostService().getUserPosts().then(res => setPosts(res.data))
        }
        , [])

    const deletePost = (id) =>{
        try{
            new PostService().deletePost(id).then(r => alert('DELETED'))
        }catch (e) {
            alert(`ERROR: ${e}`)
        }
    }
    return (
        <div>

            <div>
                {posts.map(post => (<div key={post.id}>
                    <p>{post.title} ({post.link})</p>
                    <button onClick={() => deletePost(post.id)}>delete</button>
                    <Link to={`/post/update/${post.id}`}>update</Link>
                </div>))}
            </div>
        </div>
    );
}


export default UserPosts;