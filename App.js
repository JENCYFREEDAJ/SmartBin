// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

import LoadingScreen from './components/LoadingScreen';
import LoginPageDecider from './components/LoginPageDecider';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Quantity from './components/Quantity';
import Qrcode from './components/Qrcode';
import RedeemStore from './components/RedeemStore';
import ForgotPassword from './components/ForgotPassword';
import UserDetails from './components/UserDetails';
import Cart from './components/Cart';
import LogHistory from './components/LogHistory';
import TabBar from './components/TabBar';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginDecider" component={LoginPageDecider} options={{ headerShown: false }} />
        <Stack.Screen name="Login"component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot"component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Home"component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Quantity"component={Quantity} options={{ headerShown: false }} />
        <Stack.Screen name="Qrcode"component={Qrcode} options={{ headerShown: false }} />
        <Stack.Screen name="RedeemStore"component={RedeemStore} options={{ headerShown: false }} />
        <Stack.Screen name="Cart"component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="LogHistory"component={LogHistory} options={{ headerShown: false }} />
        <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});
export default App;
