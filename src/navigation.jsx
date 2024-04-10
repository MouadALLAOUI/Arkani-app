import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StartView from './views/startView/startView';
import Home from './views/ui/home/home';
import QuranSound from './views/ui/quran/quranSound';
import QuranType from './views/ui/quran/qurantype';
import QuranQarii from './views/ui/quran/quranQarii';
import QuranList from './views/ui/quran/quranList';

export default function NavigationRouters() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="home">
        <Stack.Screen name="startView" component={StartView} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="quranType" component={QuranType} />
        <Stack.Screen name="quranQarii" component={QuranQarii} />
        <Stack.Screen name="quranList" component={QuranList} />
        <Stack.Screen name="quranSound" component={QuranSound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
