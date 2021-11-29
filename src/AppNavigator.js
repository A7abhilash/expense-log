import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {globalColors} from './styles';
import {View} from 'react-native';
import TabNavigation from './navigation/TabNavigation';

export default function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#eee',
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: globalColors.Dark,
            },
            headerTintColor: globalColors.Info,
            headerTitleStyle: {
              fontSize: 22,
            },
          }}>
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
