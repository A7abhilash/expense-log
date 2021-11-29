import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Name from '../components/settings/Name';
import {globalColors, globalStyles} from '../styles';

export default function Settings() {
  return (
    <View
      style={{
        ...globalStyles.component,
      }}>
      <ScrollView>
        <Text style={styles.title}>Settings</Text>
        {/* Name */}
        <View style={styles.container}>
          <Name />
        </View>
        {/* Categories */}
        {/* Payment modes */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColors.Light,
    borderRadius: 15,
    padding: 20,
  },
  title: {
    ...globalStyles.textTitle,
    textAlign: 'center',
    marginBottom: 15,
  },
});
