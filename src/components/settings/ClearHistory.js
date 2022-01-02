import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useData} from '../../contexts/DataContext';
import {globalColors} from '../../styles';

export default function ClearHistory() {
  const {clearHistory} = useData();

  const handlePress = () => {
    Alert.alert(
      'Confirm',
      'Are you sure to delete all your history? This is irreversilbe.',
      [{text: 'Cancel'}, {text: 'Yes', onPress: () => clearHistory()}],
    );
  };

  return (
    <View>
      <Button
        mode="contained"
        color={globalColors.Danger}
        onPress={handlePress}>
        Clear History
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
