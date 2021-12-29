import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Subheading} from 'react-native-paper';
import FilterOptions from '../components/FilterOptions';
import ListExpense from '../components/history/ListExpense';
import {useData} from '../contexts/DataContext';
import {globalStyles} from '../styles';

export default function History() {
  const {list} = useData();

  return (
    <View
      style={{
        ...globalStyles.component,
      }}>
      <View style={styles.row}>
        <Subheading>History</Subheading>
        <FilterOptions />
      </View>
      <View>
        <ListExpense list={list} />
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
