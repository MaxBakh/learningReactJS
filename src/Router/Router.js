import React from 'react';
import { Route, Switch } from 'react-router';
import { Link, Redirect } from 'react-router-dom';


export default function Router() {
    return <div>

        <div className='linkStyle'>
            <Link to='/chats'>CHATS</Link>
            <br />
            <Link to='profile'>Profile</Link>
        </div>

        <Switch>
            <Route path="/" exact>
                <h2> Home, sweet home</h2>
            </Route>
            <Route path="/chats">
                <h2> Chats</h2>
            </Route>
            <Route path="/profile">
                <p> </p>
            </Route>
            <Redirect to='/' />
        </Switch>
    </div>



}