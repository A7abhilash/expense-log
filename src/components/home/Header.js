import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import icons from '../../../assets/icons';
import {useSettings} from '../../contexts/SettingsContext';
import AddNewExpense from './AddNewExpense';

export default function Header() {
  const {name} = useSettings();
  return (
    <View style={styles.row}>
      <View style={styles.row}>
        <Image
          source={icons.profile}
          style={{
            width: 35,
            height: 35,
            resizeMode: 'contain',
            marginRight: 10,
          }}
        />
        <View>
          <Text>Welcome,</Text>
          <Text style={{fontWeight: '700'}}>{name}</Text>
        </View>
      </View>
      <View>
        <AddNewExpense />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
