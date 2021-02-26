import { all, call } from 'redux-saga/effects';
import { handleAddTicketAsync, handleUploadTickImgAsync, handleFetchTicketsAsync } from "./tickets/tickets.sagas";
import { handleLoginAsync, handleAuthmeAsync,handleCreateUserAsync } from "./auth/auth.sagas";

export default function* rootSaga() {
    yield all([
        // TICKETS
        call(handleAddTicketAsync),
        call(handleUploadTickImgAsync),
        call(handleFetchTicketsAsync),
        // AUTH
        call(handleLoginAsync),
        call(handleAuthmeAsync),
        call(handleCreateUserAsync)
    ])
}

