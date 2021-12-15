import React, {useState} from 'react';
import {StyleSheet, Modal, Text, View, ScrollView} from 'react-native';
import {Button, Chip, Divider, Subheading, TextInput} from 'react-native-paper';
import {useData} from '../../contexts/DataContext';
import {useMsg} from '../../contexts/MsgContext';
import {useSettings} from '../../contexts/SettingsContext';
import {globalColors, globalStyles} from '../../styles';

const Selector = ({name, items, selectedItem, setSelectedItem}) => (
  <View
    style={{
      marginVertical: 10,
    }}>
    <Subheading>{name}</Subheading>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {items.map((item, index) => (
        <Chip
          key={item + index}
          style={{
            margin: 3,
            backgroundColor: selectedItem.includes(item)
              ? globalColors.Warning
              : globalColors.Silver,
          }}
          mode={selectedItem.includes(item) ? 'flat' : 'outlined'}
          onPress={
            selectedItem.includes(item)
              ? () => setSelectedItem('')
              : () => setSelectedItem(item)
          }>
          {item}
        </Chip>
      ))}
    </View>
  </View>
);

export default function AddNewExpense() {
  const {setAlert} = useMsg();
  const {categories, paymentModes} = useSettings();
  const {addNewExpense} = useData();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [expense, setExpense] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    if (title && expense && selectedCategory && selectedPaymentMode) {
      const item = {
        title,
        expense: parseInt(expense, 10),
        category: selectedCategory,
        paymentMode: selectedPaymentMode,
        date: new Date().getTime().toString(),
      };
      // console.log(item);

      addNewExpense(item);

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

  return (
    <View>
      <Button mode="contained" onPress={openModal}>
        Icon
      </Button>
      <Modal visible={isModalOpen} onDismiss={closeModal} animationType="slide">
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
              selectedItem={selectedCategory}
              setSelectedItem={setSelectedCategory}
            />
            <Divider style={{backgroundColor: globalColors.Secondary}} />
            <Selector
              name="Payment Mode"
              items={paymentModes}
              selectedItem={selectedPaymentMode}
              setSelectedItem={setSelectedPaymentMode}
            />

            <View style={{marginVertical: 10}}>
              <Button mode="contained" onPress={handleSubmit}>
                Add New Expense
              </Button>
              <Button color={globalColors.Danger} onPress={closeModal}>
                Cancel
              </Button>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
