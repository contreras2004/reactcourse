import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Meme } from '@/components/CustomCarousel/Card';

// Define the stack's navigation types
type RootStackParamList = {
  Home: undefined;
  Detail: { meme: Meme };  // Expect meme as a parameter
};

// Define the props for DetailScreen
type DetailScreenProps = StackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({ route, navigation }: DetailScreenProps) {
  const { meme } = route.params;  // Access meme data from params

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meme Details</Text>
      <Text>Name: {meme.name}</Text>
      <Image source={{ uri: meme.url }} style={{ width: 200, height: 200 }} />
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
