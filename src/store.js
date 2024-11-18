import { useMemo } from "react";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'

//initialState
const initialStateStore = {
    is_user_login: null,
    user_info: null,
};


//action
export const actionTypes = {
    SET_USER_LOGIN: "SET_USER_LOGIN",
    SET_USER_INFO: "SET_USER_INFO",
    SET_USER_LOGOUT: "SET_USER_LOGOUT"

};

// reducer
export const reducerAll = (state = initialStateStore, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_LOGIN:
            return {
                ...state,
                is_user_login: action.payload,
            };
        case actionTypes.SET_USER_INFO:
            return {
                ...state,
                user_info: action.payload,
            };
            case actionTypes.SET_USER_LOGOUT:
                return {
                    ...state,
                    is_user_login: false,
                    user_info:null
                };
        default:
            return state;
    }
};

// action dispatch
export const setUserLogin = (data) => {
    return { type: actionTypes.SET_USER_LOGIN, payload: data };
};

export const setUserInfo = (data) => {
    return { type: actionTypes.SET_USER_INFO, payload: data };
};

export const setUserLogout = (data) => {
    return { type: actionTypes.SET_USER_LOGOUT, payload: data };
};



//redux_persist
const persistConfig = {
    key: 'root',
    storage,
}

//tạo saga

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducerAll)
export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store)
