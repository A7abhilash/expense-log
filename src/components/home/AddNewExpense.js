import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button, Divider, TextInput} from 'react-native-paper';
import icons from '../../../assets/icons';
import {useData} from '../../contexts/DataContext';
import {useMsg} from '../../contexts/MsgContext';
import {useSettings} from '../../contexts/SettingsContext';
import {globalColors, globalStyles} from '../../styles';
import Selector from '../Selector';

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
        date: new Date().getTime(),
      };
      // console.log(item);

      addNewExpense(item);

      clearFields();

      closeModal();
    } else {
      setAlert({
        title: null,
        msg: 'All fields are required',
        text: 'Understood',
      });
    }
  };

  const clearFields = () => {
    setTitle('');
    setExpense('');
    setSelectedCategory('');
    setSelectedPaymentMode('');
  };

  return (
    <View>
      <TouchableOpacity onPress={openModal}>
        <Image
          source={icons.plus}
          style={{width: 20, height: 20, tintColor: globalColors.Primary}}
        />
      </TouchableOpacity>
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
              <Button mode="contained" onPress={handleSubmit}>
                Add New Expense
              </Button>
              <Button
                color={globalColors.Danger}
                style={{marginTop: 10}}
                onPress={() => {
                  clearFields();
                  closeModal();
                }}>
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
