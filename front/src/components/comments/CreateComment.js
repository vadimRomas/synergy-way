import React, {useState} from 'react';
import {useParams} from "react-router-dom";


import CommentService from "./services";

function CreateComment(props) {
    const [content, setContent] = useState('');
    const {id} = useParams()

    const createComment = async () => {
        new CommentService().createComment(content, id)
            .then(res => console.log(res));
    }

    return (
        <div className={'form'}>
            <form>
                <div>
                    <label>comment: </label>
                    <input onChange={event => setContent(event.target.value)} value={content} type="text"/>
                    <button onClick={() => createComment()}>enter</button>
                </div>

            </form>
        </div>
    );
}

export default CreateComment;