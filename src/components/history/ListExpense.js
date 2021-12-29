import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Expense from './Expense';

export default function ListExpense({list}) {
  return list.map((item, index) => (
    <Expense key={index + item.date} expense={item} />
  ));
}

const styles = StyleSheet.create({});
