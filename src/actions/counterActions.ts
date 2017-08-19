import { CounterActionConsts } from '../consts';

export namespace CounterActions {
    export const incrementCounter = () => ({
        type: CounterActionConsts.INCREMENT_COUNTER
    });

    export const decrementCounter = () => ({
        type: CounterActionConsts.DECREMENT_COUNTER
    });

    export const resetCounter = () => ({
        type: CounterActionConsts.RESET_COUNTER
    });
}
