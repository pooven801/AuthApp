import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store'; // make sure store is correctly exported
import { AuthProvider } from './src/context/AuthProvider';
import Navigation from './src/navigation/navigator';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }
        persistor={persistor}
      >
        <AuthProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
