import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../styles';

export default function Settings() {
  return (
    <View
      style={{
        ...globalStyles.component,
      }}>
      <Text>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
