import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';

export default function App() {
  const width = Dimensions.get('window').width;
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
        <Carousel
          loop
          width={width}
          height={width}
          autoPlay={true}
          data={memes}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ item }) => <Card imageUrl={item} />}
        />
      ) : (
        <Text>Loading...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const Card = ({ imageUrl }: { imageUrl: string }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    paddingTop: 60,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
