import axios from "axios";
import {put} from "redux-saga/effects";

export function* getData(action: any) {
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
