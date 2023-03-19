/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import AdultFormScreen from './src/screens/adultFormScreen/AdultFormScreen';
import ChildFormScreen from './src/screens/childFormScreen/ChildFormScreen';
import ListePatientsScreen from './src/screens/listePatientsScreen/ListePatientsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MerciScreen from './src/screens/merciScreen/MerciScreen';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native-paper';
import { globalStyles } from './src/utils/globalStyles';
import SplashScreen from 'react-native-splash-screen';
import VisualizeFormScreen from './src/screens/visualizeFormScreen/VisualizeFormScreen';

export type RootStackParamList = {
  Home: undefined
  AdultForm: undefined
  ChildForm: undefined
  "Liste des fiches de Patient": undefined
  Merci: undefined
  "Visualiser fiche patient": {
    id : number
  }
}

const RootStack = createStackNavigator<RootStackParamList>();

let persistor = persistStore(store)

function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator size="large" animating={true} style={globalStyles.loader} />} persistor={persistor}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} >
            <RootStack.Screen name='Home' component={HomeScreen} />
            <RootStack.Screen name='AdultForm' component={AdultFormScreen} />
            <RootStack.Screen name='ChildForm' component={ChildFormScreen} />
            <RootStack.Screen name='Liste des fiches de Patient' component={ListePatientsScreen} options={{headerShown: true}} />
            <RootStack.Screen name='Merci' component={MerciScreen} />
            <RootStack.Screen name='Visualiser fiche patient' options={{headerShown: true}} children={({route})=> <VisualizeFormScreen id={route.params.id} /> }/>
          </RootStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
