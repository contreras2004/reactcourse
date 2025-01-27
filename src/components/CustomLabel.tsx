import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';

interface CustomLabelProps {
  text: string;
  iconName: string;
  color: string;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ text, iconName, color }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color }]}>Holi: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default CustomLabel;
