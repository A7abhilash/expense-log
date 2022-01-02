import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Divider, Title} from 'react-native-paper';
import icons from '../../assets/icons';
import {useMsg} from '../contexts/MsgContext';
import {useSettings} from '../contexts/SettingsContext';
import {globalColors, globalStyles} from '../styles';
import Selector from './Selector';

export default function FilterOptions({setFilters}) {
  const {setAlert} = useMsg();
  const {categories, paymentModes} = useSettings();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPaymentModes, setSelectedPaymentModes] = useState([]);

  const handleApplyFilters = () => {
    // console.log('Selected categories: ', selectedCategories);
    // console.log('Selected payment modes: ', selectedPaymentModes);

    setFilters({
      categories: selectedCategories,
      paymentModes: selectedPaymentModes,
    });

    closeModal();
  };

  return (
    <View style={{marginRight: 15}}>
      <TouchableOpacity onPress={openModal}>
        <Image
          source={icons.filter}
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
            <Title>Select Filter</Title>
            <Divider style={{backgroundColor: globalColors.Secondary}} />
            <Selector
              name="Category"
              items={categories}
              //   selectedItem={selectedCategories}
              isSelected={item => selectedCategories.includes(item)}
              //   setSelectedItem={setSelectedCategories}
              handlePress={item => {
                if (selectedCategories.includes(item)) {
                  setSelectedCategories(
                    selectedCategories.filter(_item => _item !== item),
                  );
                } else {
                  setSelectedCategories([...selectedCategories, item]);
                }
              }}
            />
            <Divider style={{backgroundColor: globalColors.Secondary}} />
            <Selector
              name="Payment Mode"
              items={paymentModes}
              //   selectedItem={selectedPaymentModes}
              isSelected={item => selectedPaymentModes.includes(item)}
              //   setSelectedItem={setSelectedPaymentModes}
              handlePress={item => {
                if (selectedPaymentModes.includes(item)) {
                  setSelectedPaymentModes(
                    selectedPaymentModes.filter(_item => _item !== item),
                  );
                } else {
                  setSelectedPaymentModes([...selectedPaymentModes, item]);
                }
              }}
            />

            <View style={{marginVertical: 10}}>
              <Button
                mode="contained"
                color={globalColors.Primary}
                onPress={handleApplyFilters}>
                Apply
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
    </View>
  );
}

const styles = StyleSheet.create({});
