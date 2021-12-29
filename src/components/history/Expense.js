import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Caption, List, Subheading} from 'react-native-paper';

export default function Expense({expense}) {
  return (
    <>
      <List.Item
        style={styles.container}
        title={expense.title}
        titleStyle={{
          fontSize: 17,
        }}
        description={`${expense.category} | ${new Date(
          expense.date,
        ).toDateString()}`}
        right={props => (
          <View style={{alignItems: 'flex-end'}}>
            <Subheading {...props} style={{marginTop: 5}}>
              ₹ {expense.expense}
            </Subheading>
            <Caption {...props} style={{marginTop: 5}}>
              {expense.paymentMode}
            </Caption>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 5,
  },
});
