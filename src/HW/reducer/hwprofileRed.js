import { EXAMPLE_ACTION } from '../action/hwprofile'


const initialState = {
    showName: false,
    name: 'Default'
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}