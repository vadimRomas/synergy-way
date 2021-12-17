import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import Post from "./components/posts/Post";
import Login from "./components/auth/Login";
import Comments from "./components/comments/Comments";
import UserPosts from "./components/posts/UserPosts";
import UserComments from "./components/comments/UserComments";
import UpdateComment from "./components/comments/UpdateComment";
import React from "react";
import UpdatePost from "./components/posts/UpdatePost";


function App() {


    return (
        <div className={'main'}>
            <Router>
                <nav>
                    <Link to={'/'} className='Logo'>Synergy Way</Link>
                    {localStorage.getItem('token')
                        ? <div className={'menu'}>
                            <Link to={'my/comments'}> your comments</Link>
                            <Link to={'my/posts'}> your posts</Link>
                            <button onClick={() => localStorage.removeItem('token')}>logout</button>
                        </div>
                        : <Link type={'button'} to={'/login'} className='login'>login</Link>
                    }
                </nav>
                <Routes>
                    <Route path={'/'} element={<Post/>}/>
                    <Route path={'/comments/:id'} element={<Comments/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'my/comments'} element={<UserComments/>}/>
                    <Route path={'my/posts'} element={<UserPosts/>}/>
                    <Route path={'/comment/update/:id'} element={<UpdateComment/>}/>
                    <Route path={'/post/update/:id'} element={<UpdatePost/>}/>
                </Routes>

            </Router>

        </div>
    );
}

export default App;
