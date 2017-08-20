import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Nav } from './Nav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav />, div);
});
