import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StrictMode } from 'react';

import App from './App';
import AppStore, { persistor } from './utils/AppStore';
import './index.css'; // your styles

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={AppStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
