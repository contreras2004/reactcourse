import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemes } from '@/services/MemeProvider';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const { memes } = useMemes();
  const router = useRouter();

  console.log("id: ", id);
  const meme = memes.find(m => m.id === id);

  if (!meme) {
    return <Text style={styles.text}>Meme not found 😢</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meme Details</Text>
      <Text>Name: {meme.name}</Text>
      <Image source={{ uri: meme.url }} style={{ width: 200, height: 200 }} />
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
