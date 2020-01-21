import { takeEvery, put } from 'redux-saga/effects';
import axios from "../axios-conf";
import actionTypes from "./actionTypes";

function* getShowContent(action: any) {
    try {
        const showContent = yield axios.get('/shows/6771');
        yield put({ type: actionTypes.SET_SHOW_CONTENT, payload: showContent.data });
    } catch (error) {
        yield put({ type: actionTypes.SET_ERROR, payload: error })
    }
}

function* getShowEpisodes(action: any) {
    try {
        const showEpisodes = yield axios.get('/shows/6771/episodes');
        yield put({ type: actionTypes.SET_SHOW_EPISODES, payload: showEpisodes.data });
    } catch (error) {
        yield put({ type: actionTypes.SET_ERROR, payload: error })
    }
}

function* appSagas() {
    yield takeEvery(actionTypes.GET_SHOW_CONTENT, getShowContent);
    yield takeEvery(actionTypes.GET_SHOW_EPISODES, getShowEpisodes);
}

export default appSagas;
