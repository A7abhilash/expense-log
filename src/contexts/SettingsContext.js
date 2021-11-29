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
  // Get payment modes from local storage

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
  // Update payment modes list

  return (
    <SettingsContext.Provider
      value={{name, setName, categories, paymentModes, updateName}}>
      {children}
    </SettingsContext.Provider>
  );
}
