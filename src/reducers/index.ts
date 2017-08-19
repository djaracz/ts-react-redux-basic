import { Reducer, combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { State as CounterState } from './counterReducer';
import { counterReducer } from './counterReducer';

export type RootState = Partial<CounterState>;

export const rootReducer: Reducer<RootState> = combineReducers({
    counterReducer,
    router
});
