import React from 'react';
import { Router } from './routes';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './common/Alert';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Alert />
        <Router />
      </div>
    </Provider>
  );
}

export default App;
