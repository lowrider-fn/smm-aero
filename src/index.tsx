import ReactDOM from 'react-dom';
import { Router } from 'react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

import App from './App';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={ history }>
    <App />
  </Router>,
  document.getElementById('app')
);

