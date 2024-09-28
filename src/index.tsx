import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './store';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
