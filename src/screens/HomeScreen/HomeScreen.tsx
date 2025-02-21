import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import CustomCarousel from "@/components/CustomCarousel/CustomCarousel";
import { useMemes } from "@/services/MemeProvider";

export default function HomeScreen() {
  const { memes, setMemes } = useMemes(); // Ahora obtenemos memes correctamente

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
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
  }, [setMemes]); // Agregamos setMemes como dependencia

  return (
    <View style={styles.container}>
      <Text className="text-lg p-4 mb-8 text-red-500 font-bold">
        Choose your meme 👀
      </Text>
      {memes.length > 0 ? (
        <CustomCarousel data={memes} />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
