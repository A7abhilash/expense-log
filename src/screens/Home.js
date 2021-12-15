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
      {/* Header */}
      <AddNewExpense />
      {/* Total Expense */}
      {/* Pie Chart */}
    </View>
  );
}

const styles = StyleSheet.create({});
