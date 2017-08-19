import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux';
import { routerMiddleware } from 'react-router-redux'; // tslint:disable-line
import { browserHistory } from 'react-router';

import { rootReducer } from '../reducers/index';

declare const window: Window & {
    devToolsExtension: any,
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
};

const devToolsExtension: GenericStoreEnhancer = window.devToolsExtension ?
    window.devToolsExtension() : f => f;

const middleware: Array<any> = [
    routerMiddleware(browserHistory),
    thunk
];

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        devToolsExtension
    ) as GenericStoreEnhancer
);
