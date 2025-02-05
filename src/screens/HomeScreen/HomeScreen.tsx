import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator , TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import { Meme } from '@/components/CustomCarousel/Card';

// Define the stack's navigation types
type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

// Define the props for HomeScreen
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [memes, setMemes] = useState<Meme[]>([]);


  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        const memesData = data.data.memes.map((meme: any, index: number) => ({
          id: String(index),
          url: meme.url,
          name: meme.name,
        }));
        setMemes(memesData);
      })
      .catch((error) => console.error(error));
  }, []);
  

  return (
    <View style={styles.container}>
      <Text className="text-lg p-4 mb-8 text-red-500 font-bold">
        Choose your meme 👀
      </Text>
      {memes.length > 0 ? <CustomCarousel data={memes} /> : <ActivityIndicator size="large" color="#0000ff" /> }
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('Detail')}
        className="bg-blue-600 p-4 rounded-lg mb-8"
      >
        <Text className="text-white text-lg">Go to Detail</Text>
      </TouchableOpacity>

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
  }
});
