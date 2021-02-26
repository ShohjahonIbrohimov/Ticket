// import { takeLatest, put } from "redux-saga/effects";
// import axios from "axios";
// import USER_ACTION_TYPES from "./user.action-types";
// import {
//     successCreateUser
// } from "./user.actions";

// // CREATE USER
// export function* handleCreateUserAsync() {
//     yield takeLatest(
//         AUTH_ACTION_TYPES.START_LOGIN,
//         handleCreateUser
//     );
// }

// export function* handleCreateUser(action) {
//     try {
//         let data = yield axios({
//             url: "/api/v1/auth/signup",
//             method: "POST",
//             data: action.payload,
//         });
//         yield put(successCreateUser(data.data.token));
//     } catch (error) {
//         console.log(error)
//     }
// }


