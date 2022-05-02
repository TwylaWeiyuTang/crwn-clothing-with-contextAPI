import { userActionTypes} from './userTypes'

const INITIAL_STATE = {
    currentUser: null
} // setup the initial state

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER: // if the action.type matches with this case
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state; //if the action type does not match with the type this reducer cares about
            // then return current state
    }
} // the state is the current state when the action is fired

export default userReducer