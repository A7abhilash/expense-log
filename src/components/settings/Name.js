import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useSettings} from '../../contexts/SettingsContext';
import {globalColors} from '../../styles';

export default function Name() {
  const {name: userName, updateName} = useSettings();
  const [name, setName] = useState(userName);

  const handleSave = () => {
    updateName(name);
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Name"
        placeholder="User Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button
        color={globalColors.Success}
        mode="contained"
        style={styles.btn}
        onPress={handleSave}>
        Save
      </Button>
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
});
