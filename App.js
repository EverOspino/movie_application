import React from 'react';
import LoginPage from './src/components/pages/LoginPage.jsx';
import RegisterPage from './src/components/pages/RegisterPage.jsx';
import HomePage from './src/components/pages/HomePage.jsx';
import LogoPage from './src/components/pages/LogoPage.jsx';
import MovieDetailsPage from './src/components/pages/MovieDetailsPage.jsx';

// npm install @react-navigation/bottom-tabs
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Redux
import { Provider } from 'react-redux';
import store from './src/store/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Logo" component={LogoPage} options={{ headerShown: false }} /> */}
          <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

