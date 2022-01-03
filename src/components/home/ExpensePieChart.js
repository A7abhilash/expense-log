import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {useData} from '../../contexts/DataContext';
import {useSettings} from '../../contexts/SettingsContext';

export default function ExpensePieChart() {
  const {list} = useData();
  const {categories} = useSettings();

  const [series, setSeries] = useState([]);
  const sliceColor = ['#F44336', '#2196F3'];

  useEffect(() => {
    if (list.length) {
      //   console.log(list.map(item => ({value: item.expense, text: item.title})));

      let data = categories.map(item => ({text: item}));

      data = data.map(item => {
        item.value = list
          .filter(_item => _item.category === item.text)
          .reduce((a, b) => a + b.expense, 0);
        item.text += ` (₹${item.value})`;
        return item;
      });

      //   console.log(data);

      setSeries(data);
    }
  }, [list, categories]);

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
      <PieChart data={series} showText />
    </View>
  );
}

const styles = StyleSheet.create({});
