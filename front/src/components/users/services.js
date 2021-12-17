import axios from 'axios'

export default class UserService  {

    url = 'http://127.0.0.1:8000/user/'

    getUsers() {
        return axios.get(`${this.url}`);
    }

    createUser(username, password,) {
        const user = { username, password: password, is_active: true}
        return axios.post(this.url, user);
    }

    updateUser(username, password, group, id) {
        const user = {username, password, group}
        return axios.patch(`${this.url}${id}/update`, user);
    }

    deleteUser(id) {
        return axios.delete(`${this.url}${id}/delete`);
    }

};
