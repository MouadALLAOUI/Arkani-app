import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import StartView from './views/startView/startView';
import Home from './views/ui/home/home';
import QuranSound from './views/ui/quran/quranSound';

export default function NavigationRouters() {
  const Stack = createNativeStackNavigator();
  const insets = useSafeAreaInsets();
  return (
    <NavigationContainer
      onReady={() => console.log('Navigation container is ready')}>
      <View
        style={{
          paddingTop: insets.top,
          // paddingBottom: insets.bottom,
          height: '100%',
          minHeight: useWindowDimensions().height,
        }}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="startView">
          <Stack.Screen name="startView" component={StartView} />
          <Stack.Group name="UIGroup">
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="quranS" component={QuranSound} />
          </Stack.Group>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
