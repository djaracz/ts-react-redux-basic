import { Reducer, combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { RouterState } from 'react-router';

import { State as CounterState } from './counterReducer';
import { counterReducer } from './counterReducer';

export type RootState = {
    counterReducer: CounterState,
    router: RouterState
};

export const rootReducer: Reducer<RootState> = combineReducers({
    counterReducer,
    router
});
