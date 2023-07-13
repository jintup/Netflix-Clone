import React,{useEffect} from 'react';
import Navigation from './app/navigators/navigation';
import RNBootSplash from 'react-native-bootsplash';
const App: React.FC = () => {

  const hideSplashScreen = RNBootSplash.hide;
  useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await hideSplashScreen({ fade: true, duration: 50 });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Navigation />;
};

export default App;
