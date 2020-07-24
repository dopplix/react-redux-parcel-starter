import * as types from './actionTypes';

const initialState = {
    users: [],
    currentUserId: "dopplix"
}

export default (state=initialState, action) => {
    switch(action.type){
        case types.ADD_USER:
            return { 
                ...state,
                users: [...state.users, action.newUser],
            }
        case types.LOGIN:
            return {
                ...state,
                currentUserId: action.loggedInUserId
            }
        case types.LOGOUT:
            return {
                ...state,
                currentUserId: null
            }
        case types.LIKE_POST:
                return {
                    ...state,
                    users: state.users.map((user)=>{ return user.userId === action.user.userId ? action.user : user; })
                }
        default:
            return state;
    }
};