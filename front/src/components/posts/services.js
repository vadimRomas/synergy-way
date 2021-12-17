import axios from 'axios'
import $api from "../services";

export default class PostService {

    url = 'http://127.0.0.1:8000/post/'

    getPosts() {
        return axios.get(`${this.url}`);
    }

    getUserPosts(){
        return $api.get('my/posts/')
    }

    createPost(title, link) {
        const post = { title, link}
        return $api.post(this.url, post,);
    }

    updatePost(title, link, id) {
        const post = {title, link}
        return axios.patch(`${this.url}${id}/`, post);
    }

    deletePost(id) {
        return $api.delete(`${this.url}${id}/`);
    }

    like(id) {
        return $api.post(`like/${id}`)
    }
};
