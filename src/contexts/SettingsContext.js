import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMsg} from './MsgContext';

const SettingsContext = React.createContext();

export const useSettings = () => useContext(SettingsContext);

export function SettingsProvider({children}) {
  const {setToast} = useMsg();

  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [paymentModes, setPaymentModes] = useState([]);

  /**USE EFFECTS */
  useEffect(() => {
    getName();
    getCategories();
    getPaymentModes();
  }, []);

  /**GETTERS */
  // Get name from local storage
  const getName = async () => {
    try {
      const data = await AsyncStorage.getItem('name');
      if (data) {
        setName(data);
      }
    } catch (error) {
      console.log(error);
      setName('');
    }
  };

  // Get categories from local storage
  const getCategories = async () => {
    try {
      const data = await AsyncStorage.getItem('categories');
      if (data) {
        setCategories(JSON.parse(data));
      }
    } catch (error) {
      console.log(error);
      setCategories([]);
    }
  };

  // Get payment modes from local storage
  const getPaymentModes = async () => {
    try {
      const data = await AsyncStorage.getItem('payment_modes');
      if (data) {
        setPaymentModes(JSON.parse(data));
      }
    } catch (error) {
      console.log(error);
      setPaymentModes([]);
    }
  };

  /**SETTERS */
  // Set name
  const updateName = async _name => {
    try {
      await AsyncStorage.setItem('name', _name);
      setToast('Changes Saved!');
    } catch (error) {
      console.log(error);
    }
  };

  // Update categories list
  const updateCategories = async _categories => {
    try {
      await AsyncStorage.setItem('categories', JSON.stringify(_categories));
      setCategories(_categories);
      setToast('Changes Saved!');
    } catch (error) {
      console.log(error);
    }
  };

  // Update payment modes list
  const updatePaymentModes = async _paymentModes => {
    try {
      await AsyncStorage.setItem(
        'payment_modes',
        JSON.stringify(_paymentModes),
      );
      setPaymentModes(_paymentModes);
      setToast('Changes Saved!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        name,
        categories,
        paymentModes,
        updateName,
        updateCategories,
        updatePaymentModes,
      }}>
      {children}
    </SettingsContext.Provider>
  );
}
