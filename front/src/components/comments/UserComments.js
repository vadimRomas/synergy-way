import React, {useEffect, useState} from 'react';

import CommentService from "./services";
import {Link} from "react-router-dom";


function UserComments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
            new CommentService().getUserComments().then(res => setComments(res.data))
        }
        , [])
    const deleteComment = (id) => {
        try {
            new CommentService().deleteComment(id).then(r => alert('DELETED'))
        }catch (e) {
            alert(`ERROR: ${e}`)
        }
    }
    return (
        <div>
                {comments.map(comment => (<div key={comment.id}>
                    <p>{comment.content}</p>
                    <button onClick={() => deleteComment(comment.id)}>delete</button>
                    <Link to={`/comment/update/${comment.id}`}>update</Link>
                </div>))}

        </div>
    );
}


export default UserComments;