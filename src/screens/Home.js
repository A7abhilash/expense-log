import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/home/Header';
import TotalExpense from '../components/home/TotalExpense';
import {globalStyles} from '../styles';

export default function Home() {
  return (
    <View
      style={{
        ...globalStyles.component,
      }}>
      {/* Header */}
      <Header />
      {/* Total Expense */}
      <TotalExpense />
      {/* Pie Chart */}
    </View>
  );
}

const styles = StyleSheet.create({});
