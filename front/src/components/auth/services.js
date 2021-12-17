import axios from "axios";


export default class AuthService {


    async login(username, password) {
        await axios.post('http://127.0.0.1:8000/login/', {username, password})
            .then(res => localStorage.setItem('token', res.data.access))
    }

    register(username, password) {
        return axios.post('http://127.0.0.1:8000/user/', {username: username, password: password, is_active: true})
    }

    logout() {
    }
};