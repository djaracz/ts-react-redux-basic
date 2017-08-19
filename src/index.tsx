import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import App from './components/App/App';
import { Main } from './containers/Main/Main';
import { store } from './store/index';

import registerServiceWorker from './utils/registerServiceWorker';

import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
