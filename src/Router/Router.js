import React from 'react';
import '../App.css'
import { Route, Switch } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import App from '../App';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import { changeName } from '../HW/action/hwprofile'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from "react";
import { toggleShowName } from "../HW/action/hwprofile"
import { Provider } from "react-redux";
import { store } from '../HW/hwstore';
import { EXAMPLE_ACTION } from '../HW/action/hwprofile'
import Profile from '../HW/funcTest'
import News from '../API_NEWS';
import Login from '../service/log';


// function Profile() {
//     const { showName, name } = useSelector((state) => state);
//     const dispatch = useDispatch();

//     const setShowName = useCallback(() => {
//         dispatch(toggleShowName);
//     }, [dispatch]);



//     // 
// }


const Private = ({ isAuthed, ...props }) => {
    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}





export default function Router() {
    // const dispatch = useDispatch()

    // const { name, age } = useSelector(state => state.profile)

    // const nameSubmit = (newName) => {
    //     // dispatch(changeName(newName))
    // }



    return <div>

        <div className='linkStyle' >
            <Link to="/">Home

            </Link>

            <Link to='/chats'>CHATS</Link>

            <Link to='profile'>Profile</Link>
            <Link to="/news" >News</Link>
        </div>
        <Provider store={store}>
            <Switch>
                <Private path="/" exact>
                    <h2> Home, sweet home</h2>
                </Private>
                <Private path="/chats">
                    <h2> Chats</h2>
                </Private>
                <Private path="/profile">
                    <p>Profile</p>
                    <Profile />
                </Private>

                <Route path="/login" component={Login} />

                <Route path="/news" component={News} />



                <Redirect to='/' />
            </Switch>
        </Provider>
    </div >



}