import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import  {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import Home from './Pages/Home/Index';
import Principal from './Pages/Principal/Index';
import Teste from './Pages/Teste/Index';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Black': require('./assets/Fonts/Poppins-Black.ttf'),
    'Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'Medium': require('./assets/Fonts/Poppins-Medium.ttf'),
    'Light': require('./assets/Fonts/Poppins-Light.ttf'),
    'Regular': require('./assets/Fonts/Poppins-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }}/>
        <Stack.Screen name="Teste" component={Teste} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
