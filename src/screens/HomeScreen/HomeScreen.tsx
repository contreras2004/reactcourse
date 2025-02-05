import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import { Meme } from '../../components/CustomCarousel/Card';

export default function App() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        const memesData = data.data.memes.map((meme: any) => ({
          url: meme.url,
          name: meme.name,
        }));
        setMemes(memesData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text className='text-3xl mt-10 text-blue-600' style={styles.helloText}>Choose your meme 👀</Text>
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