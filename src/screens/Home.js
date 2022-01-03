import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ExpensePieChart from '../components/home/ExpensePieChart';
import Header from '../components/home/Header';
import TotalExpense from '../components/home/TotalExpense';
import {globalStyles} from '../styles';

export default function Home() {
  return (
    <View
      style={{
        ...globalStyles.component,
        paddingBottom: 40,
      }}>
      <ScrollView>
        {/* Header */}
        <Header />
        {/* Total Expense */}
        <TotalExpense />
        {/* Pie Chart */}
        <ExpensePieChart />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
