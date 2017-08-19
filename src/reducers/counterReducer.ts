import { Action } from '../types/actions';
import { CounterActionConsts } from '../consts/index';

export type State = Readonly<{
    counter: number
}>;

export const initialState: State = {
    counter: 0
};

export function counterReducer(
    state: State = initialState,
    action: Action<string, {}>
): State {
    switch (action.type) {
        case CounterActionConsts.INCREMENT_COUNTER:
            return {
                counter: state.counter + 1
            };

        case CounterActionConsts.DECREMENT_COUNTER:
            return {
                counter: state.counter - 1
            };

        case CounterActionConsts.RESET_COUNTER:
            return {
                counter: 0
            };
    
        default:
            return state;
    }
}