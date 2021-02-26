import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import AUTH_ACTION_TYPES from "./auth.action-types";
import {
    successLogin,
    setError,
    setSuccess,
    startAuthme,
    successAuthme,
    successCreateUser
} from "./auth.actions";

// LOGIN
export function* handleLoginAsync() {
    yield takeLatest(
        AUTH_ACTION_TYPES.START_LOGIN,
        handleLogin
    );
}

export function* handleLogin(action) {
    try {
        let data = yield axios({
            url: "/api/v1/auth/signin",
            method: "POST",
            data: action.payload,
        });
        yield put(setSuccess(true));
        yield put(successLogin(data.data.token));
        yield put(startAuthme(data.data.token));
    } catch (error) {
        yield put(setError(error.message));
    }
}


// LOGIN
export function* handleAuthmeAsync() {
    yield takeLatest(
        AUTH_ACTION_TYPES.START_AUTH_ME,
        handleAuthme
    );
}

export function* handleAuthme(action) {
    try {
        let data = yield axios({
            url: "/api/v1/auth/me",
            method: "GET",
        });
        yield put(successAuthme(data.data));
    } catch (error) {
        yield put(setError(error.message));
    }
}

// CREATE USER
export function* handleCreateUserAsync() {
    yield takeLatest(
        AUTH_ACTION_TYPES.START_CREATE_USER,
        handleCreateUser
    );
}

export function* handleCreateUser(action) {
    let payload = action.payload
    try {
        let data = yield axios({
            url: "/api/v1/auth/signup",
            method: "POST",
            data: payload.values,
        });
        payload.messageSuccess("Successfully created user!")
        payload.setloading(false)
        // yield put(successCreateUser(data.data.token));
    } catch (error) {
        payload.messageError("Error in creating user!")
        payload.setloading(false)
        console.log(error)
    }
}
