import USER_ACTION_TYPES from "./user.action-types";


// CREATE USER
export const startCreateUser = (data) => ({
    type: USER_ACTION_TYPES.START_CREATE_USER,
    payload: data,
});


export const successCreateUser = (data) => ({
    type: USER_ACTION_TYPES.SUCCESS_CREATE_USER,
    payload: data,
});

