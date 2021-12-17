import React, {useState} from 'react';
import {useParams} from "react-router-dom";

import CommentService from "./services";

function UpdateComment() {
    const [content, setContent] = useState('');
    const {id} = useParams()

    const updateComment = async () => {
        try{
            await new CommentService().updateComment(content, id)
            .then(res => console.log(res));
            await alert('DONE')
        }catch (e) {
            alert(`ERROR ${e}`)
        }
    }

    return (
        <div className={'form'}>
            <form>
                <div>
                    <label>comment: </label>
                    <input onChange={event => setContent(event.target.value)} value={content} type="text"/>
                    <button onClick={() => updateComment()}>update</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateComment;