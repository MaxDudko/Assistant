import { takeEvery, put, all, call, take } from 'redux-saga/effects';
import axios from "axios";

function* getData(action: any) {
    console.log(`${action.payload.typed}: `, action);
    let data;
    const getData = yield axios.post(`http://localhost:4000${action.payload.path}`, {
        "id": action.payload.id
    })
        .then((response) => {
            console.log(`${action.payload.path}: `, response);
            data = response.data;
        })
        .catch((error) => {
            console.log(`${action.payload.path}: `, error)
        });

    yield put({type: action.payload.typed, payload: data})
}

function* updateData(action: any) {
    console.log(`${action.payload.typed}: `, action);
    if(!action.payload.id) return;
    const setData = yield axios.post(`http://localhost:4000${action.payload.path}`, {
        "user": {
            "id": action.payload.id,
            "profile": {
                ...action.payload.data
            }
        }
    })
        .then((response) => {
            console.log(`${action.payload.path}: `, response);
        })
        .catch((error) => {
            console.log(`${action.payload.path}: `, error)
        });
    yield put({type: action.payload.typed, payload: action.payload.data})
}

function* isLogin (action: any) {
    const check = axios.get('http://localhost:4000/auth/get/', {
        headers: {
            Authorization: `Token ${action.payload.token}`
        }
    })
        .then((response) => {
            console.log('/auth/get: ', response);
            let id = response.data.user._id;
            // this.props.getProfileData(id);
            // this.props.getNotificationsData(id);
        })
        .catch((error) => {
            console.log('/auth/get: ', error);
            window.localStorage.clear();
        });
}

function* coreSaga() {
    // axios.get('http://localhost:4000/auth/get/', {
    //     headers: {
    //         Authorization: `Token ${action.payload.token}`
    //     }
    // })
    //     .then((response) => {
    //         console.log('/auth/get: ', response);
    //         let id = response.data.user._id;
    //         this.props.setID(id);
    //         this.props.getProfileData(id);
    //         this.props.getNotificationsData(id);
    //     })
    //     .catch((error) => {
    //         console.log('/auth/get: ', error);
    //         window.localStorage.clear();
    //     });
    yield takeEvery('GET_PROFILE_DATA', getData);
    yield takeEvery('GET_NOTIFICATIONS_DATA', getData);
    yield takeEvery('SET_PROFILE_DATA', updateData);
    yield takeEvery('GET_TASKS_DATA', getData);
    // yield takeEvery('SET_TASK', updateData);
    // yield takeEvery('SET_TASK', updateData);
}

export default function* rootSaga() {
    yield all([
        coreSaga()
    ]);
}
