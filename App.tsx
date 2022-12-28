import React from 'react';
import Navigation from './app/screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from 'app/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
