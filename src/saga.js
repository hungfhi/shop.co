import { all, takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, setUserInfo } from './store';
import apis from './api/apis';

function* handleUserLogin(action) {
    try {
        const response = yield call(apis.onLoginUser, action.payload);
        yield put(setUserInfo(response?.data));

    } catch (error) {
        console.log('Error during user login saga:', error);
    }
}

function* handleUserLogout() {
    try {
    } catch (error) {
        console.log('Error during user logout saga:', error);
    }
}

function* watchUserLogin() {
    yield takeLatest(actionTypes.SET_USER_LOGIN, handleUserLogin);
}
function* watchUserLogout() {
    yield takeEvery(actionTypes.SET_USER_LOGOUT, handleUserLogout);
}

export default function* rootSaga() {
    yield all([
        watchUserLogin(),
        watchUserLogout(), 
    ]);
}