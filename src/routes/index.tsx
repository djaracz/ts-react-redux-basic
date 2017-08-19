import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Main } from '../containers/Main/Main';
import { CounterContainer } from '../containers/CounterContainer/CounterContainer';

const Foo = () => (
    <div>
        Foo!
    </div>
);

const Bar = () => (
    <div>
        Bar!
    </div>
);

export const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={CounterContainer} />
        <Route path="foo" component={Foo} />
        <Route path="bar" component={Bar} />
    </Route>
);
