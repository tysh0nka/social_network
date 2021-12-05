import React from 'react';
import '../App.css';
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

import {StateType} from "../redux/state";

type AppType = {
    state: StateType,
    addPost: ()=> void
    newPostText: (text: string) => void
}

function App(props : AppType) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                        <Route path={'/profile'} element={<Profile posts={props.state.profilePage.posts} addPost={props.addPost} newPostText={props.newPostText} newText={props.state.profilePage.newPostText}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                        <Route path={'/'} element={<Profile posts={props.state.profilePage.posts} addPost={props.addPost}  newPostText={props.newPostText} newText={props.state.profilePage.newPostText}/>}/>
                    </Routes>
                </div>
        </BrowserRouter>);
}

export default App;
