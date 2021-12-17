import CreateUser from "../users/CreateUser";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import AuthService from "./services";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const UserLogin = () => {
         new AuthService().login(username, password)
            .then(res => console.log(res));
         navigate("../", { replace: true });
    }

    return (
        <div>
            <br/>
            <form>
                <legend>Login</legend>
                <div>
                    <label>username: </label>
                    <input onChange={event => setUsername(event.target.value)}
                           type="text"
                           value={username}
                    />
                </div>
                <div>
                    <label>password: </label>
                    <input onChange={event => setPassword(event.target.value)}
                           type="password"
                           value={password}
                    />
                </div>
                {/*<Link to={'/news'}>*/}
                <button onClick={() => UserLogin()}>login</button>
                {/*</Link>*/}
            </form>
            <br/>
            <CreateUser/>
        </div>
    )
}

export default Login;