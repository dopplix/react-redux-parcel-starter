import * as types from './actionTypes';

export const addUser = (newUser) => {
    return { type: types.ADD_USER, newUser };
};

export const login = (loggedInUserId) => {
    return { type: types.LOGIN, loggedInUserId }
};

export const logout = () => {
    return { type: types.LOGOUT }
};

export const likePost = (user, postId)=>{
    return { type: types.LIKE_POST, user, postId }
};
