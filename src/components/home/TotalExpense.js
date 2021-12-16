import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useData} from '../../contexts/DataContext';
import {globalColors} from '../../styles';

export default function TotalExpense() {
  const {totalExpense, list} = useData();

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 15,
            color: globalColors.Gray,
          }}>
          Total Expense,
        </Text>
        <Text
          style={{
            fontSize: 35,
          }}>
          {totalExpense} ₹
        </Text>
      </View>
      {list.length !== 0 && (
        <View style={{marginTop: 15}}>
          <Text
            style={{
              fontSize: 15,
              color: globalColors.Gray,
            }}>
            Last Spent On,
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: globalColors.Gray,
            }}>
            {new Date(list[0].date).toDateString()}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    backgroundColor: globalColors.Info,
    borderRadius: 20,
  },
});
