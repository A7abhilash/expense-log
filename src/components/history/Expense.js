import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Caption, List, Subheading} from 'react-native-paper';
import icons from '../../../assets/icons';
import {useData} from '../../contexts/DataContext';
import AddNewExpense from '../home/AddNewExpense';
import EditExpense from './EditExpense';

export default function Expense({expense}) {
  const {deleteExpense} = useData();

  const [isEditing, setIsEditing] = useState(false);

  const handlePress = () => {
    Alert.alert('Select Option', null, [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          Alert.alert('Confirm', 'Are you sure to delete this expense?', [
            {text: 'Cancel'},
            {text: 'Yes', onPress: () => deleteExpense(expense.date)},
          ]);
        },
      },
      {
        text: 'Edit',
        onPress: () => setIsEditing(true),
      },
    ]);
  };

  return (
    <>
      <List.Item
        style={styles.container}
        onPress={handlePress}
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
      {isEditing && (
        <EditExpense
          _expense={expense}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
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
