import React, {useEffect, useState} from 'react';
import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Divider, TextInput} from 'react-native-paper';
import {useData} from '../../contexts/DataContext';
import {useMsg} from '../../contexts/MsgContext';
import {useSettings} from '../../contexts/SettingsContext';
import {globalColors, globalStyles} from '../../styles';
import Selector from '../Selector';

export default function EditExpense({isEditing, setIsEditing, _expense}) {
  const {setAlert} = useMsg();
  const {categories, paymentModes} = useSettings();
  const {updateExpenseList} = useData();

  const [title, setTitle] = useState('');
  const [expense, setExpense] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('');

  const closeModal = () => setIsEditing(false);

  const handleSubmit = () => {
    if (title && expense && selectedCategory && selectedPaymentMode) {
      const item = {
        title,
        expense: parseInt(expense, 10),
        category: selectedCategory,
        paymentMode: selectedPaymentMode,
        date: _expense.date,
      };
      // console.log(item);

      updateExpenseList(item, item.date);

      setTitle('');
      setExpense('');
      setSelectedCategory('');
      setSelectedPaymentMode('');

      closeModal();
    } else {
      setAlert({
        title: null,
        msg: 'All fields are required',
        text: 'Understood',
      });
    }
  };

  useEffect(() => {
    if (_expense) {
      //   console.log(_expense);
      setTitle(_expense.title);
      setExpense(_expense.expense.toString());
      setSelectedCategory(_expense.category);
      setSelectedPaymentMode(_expense.paymentMode);
    }
  }, [_expense]);

  return (
    <Modal visible={isEditing} onDismiss={closeModal} animationType="fade">
      <View
        style={{
          ...globalStyles.component,
          backgroundColor: globalColors.Light,
        }}>
        <ScrollView>
          <View style={{marginVertical: 10}}>
            <TextInput
              mode="outlined"
              label="Title"
              // placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              mode="outlined"
              label="Expense"
              // placeholder="Expense"
              keyboardType="numeric"
              value={expense}
              onChangeText={setExpense}
            />
          </View>

          <Selector
            name="Category"
            items={categories}
            // selectedItem={selectedCategory}
            isSelected={item => item === selectedCategory}
            // setSelectedItem={setSelectedCategory}
            handlePress={item => {
              if (selectedCategory === item) {
                setSelectedCategory('');
              } else {
                setSelectedCategory(item);
              }
            }}
          />
          <Divider style={{backgroundColor: globalColors.Secondary}} />
          <Selector
            name="Payment Mode"
            items={paymentModes}
            // selectedItem={selectedPaymentMode}
            isSelected={item => item === selectedPaymentMode}
            // setSelectedItem={setSelectedPaymentMode}
            handlePress={item => {
              if (selectedPaymentMode === item) {
                setSelectedPaymentMode('');
              } else {
                setSelectedPaymentMode(item);
              }
            }}
          />

          <View style={{marginVertical: 10}}>
            <Button
              mode="contained"
              color={globalColors.Primary}
              onPress={handleSubmit}>
              Edit
            </Button>
            <Button
              color={globalColors.Danger}
              style={{marginTop: 10}}
              onPress={closeModal}>
              Cancel
            </Button>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
