import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import CommentService from "./services";
import CreateComment from "./CreateComment";


function Comments() {
    const [comments, setComments] = useState([]);
    const {id} = useParams()
    useEffect(() => {
            new CommentService().getComments(id).then(res => setComments(res.data))
        }
        , [])

    return (
        <div>
            {localStorage.getItem('token')
            ? <CreateComment post={id}/>
            : 'if you want to create a comment log in'
            }

            <div>
                {comments.map(comment => (<div key={comment.id}>{comment.content}</div>))}
            </div>
        </div>
    )
        ;
}


export default Comments;