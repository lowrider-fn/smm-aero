import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import App from './App';

const Router = (process.env.NODE_ENV === 'production' && HashRouter) || BrowserRouter;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
