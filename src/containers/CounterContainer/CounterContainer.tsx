import * as React from 'react';
import * as _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';

import { Button } from 'reactstrap';

import { State as CounterState } from '../../reducers/counterReducer';
import { CounterActions } from '../../actions/counterActions';
import { RootState } from '../../reducers/index';

import { CounterElement } from './CounterContainer.s';

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

        console.log('lodash test', _.has({ 'test': 1 }, 'test'));

        return (
            <div>
                <Button onClick={decrementCounter}>-</Button>
                <CounterElement textColor='pink'>{counter}</CounterElement>
                <Button onClick={incrementCounter}>+</Button>
                <Button onClick={resetCounter}>reset</Button>
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
