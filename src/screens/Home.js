import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/home/Header';
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
      {/* Pie Chart */}
    </View>
  );
}

const styles = StyleSheet.create({});
