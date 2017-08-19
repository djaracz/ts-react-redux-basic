import * as React from 'react';
import { Link } from 'react-router';

export class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Counter</Link>
        </li>
        <li>
          <Link to="/foo">Foo!</Link>
        </li>
        <li>
          <Link to="/bar">Bar!</Link>
        </li>
      </ul>
    );
  }
}
