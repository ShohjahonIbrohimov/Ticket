import USER_ACTION_TYPES from "./user.action-types";

const INITIAL_STATE = {
    users: []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.SUCCESS_CREATE_USER:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;