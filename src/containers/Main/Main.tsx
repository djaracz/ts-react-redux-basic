import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';

import { State as CounterState } from '../../reducers/counterReducer';
import { CounterActions } from '../../actions/counterActions';
import { RootState } from '../../reducers/index';

namespace Main {
    export interface DispatchProps {
        incrementCounter: () => void;
        decrementCounter: () => void;
        resetCounter: () => void;
    }

    type StateProps = Partial<CounterState>;

    type ReceivedProps = {
        children: any
    };

    export type Props = Partial<StateProps> & Partial<DispatchProps> &
        Partial<ReceivedProps>;
    export type State = {};
}

class MainContainer extends React.Component<Main.Props, Main.State> {
    render() {
        const { children } = this.props;

        return (
            <div>
                {children}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch<Main.DispatchProps>) => bindActionCreators({
    incrementCounter: CounterActions.incrementCounter,
    decrementCounter: CounterActions.decrementCounter,
    resetCounter: CounterActions.resetCounter
}, dispatch);

export const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer as any);
