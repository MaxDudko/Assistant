import axios from "axios";
import {put} from "redux-saga/effects";

export function* updateData(action: any) {
    console.log(`${action.payload.typed}: `, action);
    if(!action.payload.id) return;
    const setData = yield axios.post(`http://localhost:4000${action.payload.path}`, {
        "user": {
            "id": action.payload.id,
            "data": {
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
    yield put({type: action.payload.typed, payload: action.payload});
    if(action.payload.typed2) yield put({type: action.payload.typed2, payload: {}})
}
