import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Detail: undefined;
  };
  

type DetailScreenProps = StackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({ navigation }: DetailScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Detail Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
