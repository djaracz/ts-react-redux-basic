import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Main } from '../containers/Main/Main';

const Home = () => (<div>Home!</div>);
const Foo = () => (<div>Foo!</div>);
const Bar = () => (<div>Bar!</div>);

export const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="foo" component={Foo} />
        <Route path="bar" component={Bar} />
    </Route>
);
