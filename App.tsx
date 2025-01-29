import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import CustomCarousel from './src/components/CustomCarousel/CustomCarousel';

export default function App() {
  const [memes, setMemes] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        const memeUrls = data.data.memes.map((meme: any) => meme.url);
        setMemes(memeUrls);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Choose your meme 👀</Text>
      {memes.length > 0 ? (
        <CustomCarousel data={memes} />
      ) : (
        <Text>Loading...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    paddingTop: 60,
  }
});
