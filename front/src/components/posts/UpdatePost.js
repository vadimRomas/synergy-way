import React, {useState} from 'react';
import {useParams} from "react-router-dom";

import PostService from "./services";

function UpdatePost() {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const {id} = useParams()

    const updatePost = async () => {
        try{
            await new PostService().updatePost(title, link, id)
            .then(res => console.log(res));
            await alert('DONE')
        }catch (e) {
            alert(`ERROR ${e}`)
        }
    }

    return (
        <div className={'form'}>
            <form>
                <legend>Update Post</legend>
                <div>
                    <label>link: </label>
                    <input onChange={event => setLink(event.target.value)} value={link} type="text"/>
                </div>
                <div>
                    <label>title: </label>
                    <input onChange={event => setTitle(event.target.value)} value={title} type="text"/>
                </div>
                <button onClick={() => updatePost()}>update</button>
            </form>
        </div>
    );
}

export default UpdatePost;