import {Dimensions, StyleSheet} from 'react-native';

const globalColors = {
  Dark: '#343a40',
  Secondary: '#6c757d',
  Gray: '#50555a',
  Light: '#f8f9fa',
  Silver: '#e3e3e3',
  Danger: '#dc3545',
  Success: '#28a745',
  Warning: '#ffc107',
  Primary: '#0275d8',
  Info: '#5bc0de',
};

const SIZES = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 20,
  },
  component: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
    // paddingTop: 30,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: globalColors.Dark,
  },
  textSubTitle: {
    fontSize: 20,
    color: globalColors.Dark,
  },
});

export {globalStyles, globalColors, SIZES};
