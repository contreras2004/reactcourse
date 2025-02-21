import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import CustomCarousel from '@/components/CustomCarousel/CustomCarousel';
import { useMemes } from '@/services/MemeProvider';

export default function NewPage() {

  return (
    <View style={styles.container}>
      <Text className="text-lg p-4 mb-8 text-red-500 font-bold">
        New Page
      </Text>
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
