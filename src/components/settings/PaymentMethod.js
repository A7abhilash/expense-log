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

export default function PaymentMethod() {
  const {setAlert} = useMsg();
  const {paymentModes, updatePaymentModes} = useSettings();
  const [payment_mode, setPayment_Mode] = useState('');

  const handleSave = () => {
    if (payment_mode) {
      if (!paymentModes.includes(payment_mode)) {
        updatePaymentModes([payment_mode, ...paymentModes]);
        setPayment_Mode('');
      } else {
        setAlert({
          title: null,
          msg: 'Payment Mode already exists!',
          text: 'Understood',
        });
      }
    }
  };

  const handleDelete = _item => {
    Alert.alert('CONFIRM', 'Are you sure to delete this payment mode?', [
      {
        text: 'Yes',
        onPress: () => {
          updatePaymentModes(paymentModes.filter(item => item !== _item));
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
        label="Payment Mode"
        placeholder="Payment Mode"
        value={payment_mode}
        onChangeText={setPayment_Mode}
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
          {paymentModes.map((item, index) => (
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
