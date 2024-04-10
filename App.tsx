import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/db/store';
import NavigationRouters from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{height: '100%'}}>
          <NavigationRouters />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
