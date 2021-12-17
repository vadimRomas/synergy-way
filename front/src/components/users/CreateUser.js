import React, {useState} from 'react';
import AuthService from "../auth/services";

function CreateUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const createUser = async () => {
        new AuthService().register(username, password)
            .then(res => console.log(res));
    }

    return (
        <div className={'form'}>
            <form>
                <legend>Create Account</legend>
                <div>
                    <label>username: </label>
                    <input onChange={event => setUsername(event.target.value)} value={username} type="text"/>
                </div>
                <div>
                    <label>password: </label>
                    <input onChange={event => setPassword(event.target.value)} value={password} type="password"/>
                </div>
                {/*<Link to={'/news'}>*/}
                <button onClick={() => createUser()}>create account</button>
                {/*</Link>*/}
            </form>
        </div>
    );
}


export default CreateUser;