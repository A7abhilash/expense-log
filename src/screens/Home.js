import React from 'react';
import {StyleSheet, View} from 'react-native';
import AddNewExpense from '../components/home/AddNewExpense';
import {globalStyles} from '../styles';

export default function Home() {
  return (
    <View
      style={{
        ...globalStyles.component,
      }}>
      {/* Total Expense */}
      {/* Add new Expense */}
      <AddNewExpense />
      {/* Pie Chart */}
    </View>
  );
}

const styles = StyleSheet.create({});
