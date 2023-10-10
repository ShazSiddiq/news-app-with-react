import { put, takeLatest } from 'redux-saga/effects'
import { getAllNewsError, getAllNewsSuccess, getCategorylNewsSuccess, getCategoryNewsError } from '../action/news.action'
import { GET_ALL_NEWS_START, GET_CATEGORY_NEWS_START } from '../constant/news.constant'
import { getNewsByApi } from '../services/new.service'

function* getNews() {
    try {
        let data = yield getNewsByApi()
        // console.log(data,"data")
        yield put(getAllNewsSuccess(data))
    } catch (error) {
        yield put(getAllNewsError(error))
    }
}

function* getCategoryNews({payload}) {
    try {
        let data = yield getNewsByApi(payload)
        yield put(getCategorylNewsSuccess(data))
    } catch (error) {
        yield put(getCategoryNewsError(error))
    }
}

export function* news() {
    yield takeLatest(GET_ALL_NEWS_START, getNews);
    yield takeLatest(GET_CATEGORY_NEWS_START,getCategoryNews)
}




// f0b8b4b197f2451491e2198c9aa61c2f