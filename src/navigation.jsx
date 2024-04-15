import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StartView from './views/startView/startView';
import Home from './views/ui/home/home';
import QuranSound from './views/ui/quran/quranSound';
import NavListPage from './views/ui/navListPage';
import SectionListPage from './views/ui/sectionListPage';

export default function NavigationRouters() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="home">
        <Stack.Screen name="startView" component={StartView} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="quranSound" component={QuranSound} />
        <Stack.Screen name="navListPage" component={NavListPage} />
        <Stack.Screen name="sectionLP" component={SectionListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
