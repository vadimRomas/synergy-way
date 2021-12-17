import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


import PostService from "../posts/services";

function CreatePost() {
    const [link, setLink] = useState('');
    const [title, setTitle] = useState('');
    const navigate = useNavigate();


    const create = async () => {
        new PostService().createPost(title, link)
            .then(res => console.log(res));
        navigate("./news", { replace: true });
    }

    return (
        <div>
            <form>
                <legend>Create Post</legend>
                <div>
                    <label>link: </label>
                    <input onChange={event => setLink(event.target.value)} value={link} type="text"/>
                </div>
                <div>
                    <label>title: </label>
                    <input onChange={event => setTitle(event.target.value)} value={title} type="text"/>
                </div>
                <button onClick={() => create()}>publish</button>
            </form>
        </div>
    );
}

export default CreatePost;