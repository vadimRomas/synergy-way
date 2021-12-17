import axios from 'axios'
import $api from "../services";

export default class CommentService  {

    url = 'http://127.0.0.1:8000/comment/'

    getComments(id) {
        return axios.get(`${this.url}${id}`);
    }

    getUserComments(){
        return $api.get('my/comments/')
    }

    createComment(content, id) {
        const comment = {content}
        return $api.post(`comment/${id}`, comment);
    }

    updateComment(content, id) {
        const comment = {content}
        return $api.patch(`${this.url}${id}/`, comment);
    }

    deleteComment(id) {
        return $api.delete(`${this.url}${id}/`);
    }

};
