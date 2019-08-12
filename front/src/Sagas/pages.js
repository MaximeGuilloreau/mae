import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import {
  getPageBySlugSuccess,
  getPageBySlugFailure,
  GET_PAGE_BY_SLUG_REQUEST
} from '../Actions/pages'

function* getPageBySlug() {
  try {
    console.log('get page by slug')
    yield put(getPageBySlugSuccess());
  } catch (e) {
    yield put(getPageBySlugFailure());
  }
}

export default function* () {
  yield [
    takeLatest(GET_PAGE_BY_SLUG_REQUEST, getPageBySlug),
  ];
}