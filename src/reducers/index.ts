import { Reducer, combineReducers } from 'redux';

import { State as CounterState } from './counterReducer';
import { counterReducer } from './counterReducer';

export type RootState = Partial<CounterState>;

export const rootReducer: Reducer<RootState> = combineReducers({
    counterReducer
});
