import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoadingScreen from '../screens/LoadingScreen';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="LoadingScreen"
    >
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
      <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
      <AuthStack.Screen name="LoadingScreen" component={LoadingScreen} />
    </AuthStack.Navigator>);
}