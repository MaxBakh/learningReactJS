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




function Profile() {
    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);



    // 
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
        </div>
        <Provider store={store}>
            <Switch>
                <Route path="/" exact>
                    <h2> Home, sweet home</h2>
                </Route>
                <Route path="/chats">
                    <h2> Chats</h2>
                </Route>
                <Route path="/profile">
                    <p>Profile</p>
                    <div>

                        <h4>Profile</h4>
                        <Input
                            type="checkbox"
                            checked={showName}
                            value={showName}
                            onChange={setShowName}
                        />
                        <span>Show Name</span>
                        {showName && <div>{name}</div>}


                    </div>
                </Route>
                <Redirect to='/' />
            </Switch>
        </Provider>
    </div >



}