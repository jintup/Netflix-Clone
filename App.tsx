import React from 'react';
import Navigation from './app/navigators/navigation';
import { Provider } from 'react-redux';
import store from './app/store/root-store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;

