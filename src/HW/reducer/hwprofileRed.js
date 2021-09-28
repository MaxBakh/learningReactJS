import { CHANGE_NAME } from '../../action/profile'
// import { EXAMPLE_ACTION } from '../action/hwprofile'


const initialState = {
    showName: false,
    name: 'Default'
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}