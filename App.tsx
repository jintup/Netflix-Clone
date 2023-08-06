import React, { useEffect } from 'react';
import Navigation from './app/navigators/navigation';
import { Provider } from 'react-redux';
import store from './app/store/root-store/store';
import RNBootSplash from 'react-native-bootsplash';

const App: React.FC = () => {
  const hideSplashScreen = RNBootSplash.hide;
  useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await hideSplashScreen({ fade: true, duration: 50 });
    });
  }, []);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;