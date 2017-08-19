import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';

import { State as CounterState } from '../../reducers/counterReducer';
import { CounterActions } from '../../actions/counterActions';
import { RootState } from '../../reducers/index';

namespace Counter {
    export interface DispatchProps {
        incrementCounter: () => void;
        decrementCounter: () => void;
        resetCounter: () => void;
    }

    type StateProps = Partial<CounterState>;

    export type Props = Partial<StateProps> & Partial<DispatchProps>;
    export type State = {};
}

class Counter extends React.Component<Counter.Props, Counter.State> {
    render() {
        const {
            counter,
            incrementCounter,
            decrementCounter,
            resetCounter
        } = this.props;

        return (
            <div>
                <button onClick={incrementCounter}>-</button>
                <span>{counter}</span>
                <button onClick={decrementCounter}>-</button>
                <button onClick={resetCounter}>reset</button>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    counter: state.counterReducer.counter
});

const mapDispatchToProps = (dispatch: Dispatch<Counter.DispatchProps>) => bindActionCreators({
    incrementCounter: CounterActions.incrementCounter,
    decrementCounter: CounterActions.decrementCounter,
    resetCounter: CounterActions.resetCounter
}, dispatch);

export const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter as any);
