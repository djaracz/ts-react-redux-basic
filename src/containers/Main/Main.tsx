import * as React from 'react';

import { Nav } from '../../components/Nav/Nav';

export class Main extends React.Component<{}, {}> {
    render() {
        const { children } = this.props;

        return (
            <div>
                <Nav />
                <div>
                    {children}
                </div>
            </div>
        );
    }
}
