import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { theme } from './contans/Thema';
import { ThemeProvider } from '@emotion/react';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
