import {applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import profileReducer from './reducers/profile'

const rootReducer = combineReducers({
    profile: profileReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose





export const store = createStore(
    rootReducer,
   composeEnhancers(applyMiddleware(thunk))
)