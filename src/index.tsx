import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';

const Router = (process.env.NODE_ENV === 'production' && HashRouter) || BrowserRouter;

createRoot(document.getElementById('app')!)
  .render(
    <Router>
      <App />
    </Router>
  );
