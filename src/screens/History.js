import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Caption, Divider, Subheading} from 'react-native-paper';
import FilterOptions from '../components/FilterOptions';
import ListExpense from '../components/history/ListExpense';
import {useData} from '../contexts/DataContext';
import {globalColors, globalStyles} from '../styles';

export default function History() {
  const {list} = useData();

  const [filters, setFilters] = useState({categories: [], paymentModes: []});
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    if (!filters.categories.length && !filters.paymentModes.length) {
      setDisplayList(list);
    } else {
      console.log(filters);
      setDisplayList(
        list.filter(
          item =>
            filters.categories.includes(item.category) ||
            filters.paymentModes.includes(item.paymentMode),
        ),
      );
    }
  }, [list, filters]);

  return (
    <View
      style={{
        ...globalStyles.component,
      }}>
      <View style={styles.row}>
        <Subheading>History</Subheading>
        <FilterOptions setFilters={setFilters} />
      </View>
      {(filters.categories.length !== 0 ||
        filters.paymentModes.length !== 0) && (
        <View style={{marginTop: 10}}>
          <Divider />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <View>
              <Caption style={{marginTop: 5}}>Selected filters:</Caption>
            </View>

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                width: '70%',
              }}>
              {[...filters.categories, ...filters.paymentModes].map(
                (item, index) => (
                  <Text key={index + item} style={styles.filterText}>
                    {item}
                  </Text>
                ),
              )}
            </View>
          </View>
        </View>
      )}
      <View>
        <ListExpense list={displayList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterText: {
    margin: 5,
    backgroundColor: globalColors.Silver,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});
