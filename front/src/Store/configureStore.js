import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../Reducers';
import sagas from '../Sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : nope => nope,
);

export default function (initialState) {
  const store = createStore(reducers, initialState, enhancer);
  sagas.map(saga => sagaMiddleware.run(saga));

  return store;
}