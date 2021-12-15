import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Categories from '../components/settings/Categories';
import Name from '../components/settings/Name';
import PaymentMethod from '../components/settings/PaymentMethod';
import {globalColors, globalStyles} from '../styles';

export default function Settings() {
  return (
    <View
      style={{
        ...globalStyles.component,
        paddingBottom: 70,
      }}>
      <ScrollView>
        <Text style={styles.title}>Settings</Text>
        {/* Name */}
        <View style={styles.container}>
          <Name />
        </View>
        {/* Categories */}
        <View style={styles.container}>
          <Categories />
        </View>
        {/* Payment modes */}
        <View style={styles.container}>
          <PaymentMethod />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColors.Light,
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
  },
  title: {
    ...globalStyles.textTitle,
    textAlign: 'center',
    marginBottom: 15,
  },
});
