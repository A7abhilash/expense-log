import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMsg} from './MsgContext';

const DataContext = React.createContext();

export const useData = () => useContext(DataContext);

export function DataProvider({children}) {
  const {setToast} = useMsg();

  const [list, setList] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  /**USE EFFECTS */
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (list.length) {
      setTotalExpense(getTotalExpense(list));
    }
  }, [list]);

  /**GETTERS */
  // Get categories from local storage
  const getCategories = async () => {
    try {
      const data = await AsyncStorage.getItem('expense-list');
      if (data) {
        const _data = JSON.parse(data);
        setList(_data);
        // console.log(_data);
      }
    } catch (error) {
      console.log(error);
      setList([]);
    }
  };

  // Get total expenses
  const getTotalExpense = _list => {
    if (!_list.length) {
      return 0;
    }
    let total = 0;
    total = _list.reduce((a, b) => a + b.expense, 0);
    // console.log('Total expense= ', total);
    return total;
  };

  /**SETTERS */
  // Add new expense
  const addNewExpense = async _item => {
    try {
      const _list = [_item, ...list];
      await AsyncStorage.setItem('expense-list', JSON.stringify(_list));
      setList(_list);
      setToast('New Expense Added!');
    } catch (error) {
      console.log(error);
    }
  };

  // Update categories list
  const updateExpenseList = async (_item, id) => {
    // console.log({_item, id});
    try {
      const _list = [];

      list.forEach(item => {
        if (item.date === id) {
          _list.push(_item);
        } else {
          _list.push(item);
        }
      });

      await AsyncStorage.setItem('expense-list', JSON.stringify(_list));
      setList(_list);
      setToast('Changes Saved!');
    } catch (error) {
      console.log(error);
    }
  };

  // // Edit an expense
  // const editExpense = async _item => {
  //   try {
  //     const _list = [];

  //     list.forEach(item => {
  //       if (item.date === _item.date) {
  //         _list.push(_item);
  //       } else {
  //         _list.push(item);
  //       }
  //     });

  //     await AsyncStorage.setItem('expense-list', JSON.stringify(_list));
  //     setList(_list);
  //     setToast('Expense Edited!');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Delete an expense
  const deleteExpense = async _id => {
    try {
      const _list = list.filter(item => item.date !== _id);
      await AsyncStorage.setItem('expense-list', JSON.stringify(_list));
      setList(_list);
      setToast('Expense Deleted!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        totalExpense,
        getTotalExpense,
        list,
        addNewExpense,
        updateExpenseList,
        // editExpense,
        deleteExpense,
      }}>
      {children}
    </DataContext.Provider>
  );
}
