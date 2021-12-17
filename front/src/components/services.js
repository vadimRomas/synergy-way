import axios from 'axios'


const $api = axios.create({
    withCredentials: true,
    // method: "post",
    baseURL: 'http://127.0.0.1:8000/',
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Credentials': true,
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     'Access-Control-Allow-Headers': '*'
    // }
})

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;