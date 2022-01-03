import React from 'react';
import {View} from 'react-native';
import {Caption, Chip, List, Subheading} from 'react-native-paper';
import {globalColors} from '../styles';

export default function Selector({
  name,
  items,
  selectedItem,
  handlePress,
  isSelected,
}) {
  return (
    <View
      style={{
        marginVertical: 10,
      }}>
      <Subheading>{name}</Subheading>
      {items.length ? (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {items.map((item, index) => (
            <Chip
              key={item + index}
              style={{
                margin: 3,
                backgroundColor: isSelected(item)
                  ? globalColors.Warning
                  : globalColors.Silver,
              }}
              mode={isSelected(item) ? 'flat' : 'outlined'}
              onPress={() => handlePress(item)}>
              {item}
            </Chip>
          ))}
        </View>
      ) : (
        <View>
          <Caption>
            Please add options under "{name}" field in settings.
          </Caption>
        </View>
      )}
    </View>
  );
}
