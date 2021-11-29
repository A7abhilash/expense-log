import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from '../screens/Home';
import History from '../screens/History';
import Settings from '../screens/Settings';
import {globalColors} from '../styles';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 2,
          backgroundColor: globalColors.Light,
          borderRadius: 15,
          height: 50,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.labelContainer}>
              <Text
                style={{
                  color: focused
                    ? globalColors.Primary
                    : globalColors.Secondary,
                  ...styles.labelText,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.labelContainer}>
              <Text
                style={{
                  color: focused
                    ? globalColors.Primary
                    : globalColors.Secondary,
                  ...styles.labelText,
                }}>
                History
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.labelContainer}>
              <Text
                style={{
                  color: focused
                    ? globalColors.Primary
                    : globalColors.Secondary,
                  ...styles.labelText,
                }}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 18,
  },
});
