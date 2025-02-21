import { router, Stack, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
//import { DrawerActions } from "@react-navigation/native";

export default function TabsLayout() {
  const navigation = useNavigation();
  const handlePress = (canGoBack: boolean = false) => {
    if (canGoBack) {
      router.back();
    } /*else {
      navigation.dispatch(DrawerActions.toggleDrawer);
    }*/
  };

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="newPage" />
    </Stack>
  );
}
