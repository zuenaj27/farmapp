
import * as types from './actionTypes';
import UserApi from '../api/userApi';

export function createUserSuccess(user) {
    return {type: types.CREATE_USER, user};
}

export function searchUserSuccess(user) {
    return {type: types.SEARCH_USER, user};
}

export function userFoundSuccess(user) {
    return {type: types.FIND_ONE_SEARCH, user};
}


export function createUser(user, old) {
    return dispatch => {
        return UserApi.createUser(user, old).then(user => {
            dispatch(createUserSuccess(user));
        }).catch(err => {
            throw(err);
        })
    }
}

export function searchUser(user) {
    return dispatch => {
        return UserApi.findUser(user).then(user => {
            dispatch(searchUserSuccess(user.data));
        }).catch(err=> {
            throw(err);
        })
    }
}

export function findUser(userId){
    return dispatch => {
        return UserApi.findOneUser(userId).then( user=> {
            dispatch(userFoundSuccess(user));
        }).catch(err => {
            throw(err);
        })
    }
}

