import { createStore, compose, applyMiddleware, GenericStoreEnhancer } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/index';

declare const window: Window & {
    devToolsExtension: any,
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
};

const devToolsExtension: GenericStoreEnhancer = window.devToolsExtension ?
    window.devToolsExtension() : f => f;

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        devToolsExtension
    ) as GenericStoreEnhancer
);
