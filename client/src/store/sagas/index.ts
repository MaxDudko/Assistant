import {all, takeEvery} from "redux-saga/effects";
import {getData} from "./getData";
import {updateData} from "./updateData";

export default function* rootSaga() {
    yield all([
        yield takeEvery('GET_PROFILE_DATA', getData),
        yield takeEvery('GET_NOTIFICATIONS_DATA', getData),
        yield takeEvery('SET_PROFILE_DATA', updateData),
        // yield takeEvery('GET_TASKS_DATA', getData),
        // yield takeEvery('UPDATE_TASK', updateData),
        // yield takeEvery('CREATE_TASK', updateData),
    ]);
}
