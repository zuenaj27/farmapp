

import * as types from '../actions/actionTypes';

const initialState = {
    allUsers: [],
    searchUsers: [],
    likedFiles: [],
    userProfile: {},
    messageStatus: ''
};

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case types.CREATE_USER:
            return {...state, allUsers: action.user};

        case types.SEARCH_USER:
            return {
                ...state, searchUsers: action
            };


        default:
            return state;
    }
}