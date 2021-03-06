import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Caption} from 'react-native-paper';
import Expense from './Expense';

export default function ListExpense({list}) {
  return list.length ? (
    <ScrollView>
      {list.map((item, index) => (
        <Expense key={index + item.date} expense={item} />
      ))}
    </ScrollView>
  ) : (
    <View style={{alignItems: 'center'}}>
      <Caption>No expenses found!</Caption>
    </View>
  );
}

const styles = StyleSheet.create({});
