import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useMsg} from '../../contexts/MsgContext';
import {useSettings} from '../../contexts/SettingsContext';
import {globalColors} from '../../styles';

export default function Categories() {
  const {setAlert} = useMsg();
  const {categories, updateCategories} = useSettings();
  const [category, setCategory] = useState('');

  const handleSave = () => {
    if (category) {
      if (!categories.includes(category)) {
        updateCategories([category, ...categories]);
        setCategory('');
      } else {
        setAlert({
          title: null,
          msg: 'Cateogry already exists!',
          text: 'Understood',
        });
      }
    }
  };

  const handleDelete = _item => {
    Alert.alert('COMFIRM', 'Are you sure to delete this category?', [
      {
        text: 'Yes',
        onPress: () => {
          updateCategories(categories.filter(item => item !== _item));
        },
      },
      {
        text: 'Cancel',
      },
    ]);
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Category"
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <Button
        color={globalColors.Success}
        mode="contained"
        style={styles.btn}
        onPress={handleSave}>
        Add
      </Button>
      <View style={{maxHeight: 150, marginTop: 10}}>
        <ScrollView contentContainerStyle={styles.list}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={item + index}
              style={styles.listItem}
              onLongPress={() => handleDelete(item)}>
              <Text style={{fontSize: 15}}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
  },
  btn: {
    marginTop: 5,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listItem: {
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: globalColors.Silver,
    borderRadius: 10,
  },
});
