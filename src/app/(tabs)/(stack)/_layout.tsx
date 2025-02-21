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
    <Stack
      /*screenOptions={{
        headerLeft: ({ canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "menu"}
            size={24}
            color={"gray"}
            className="ml-2"
            onPress={() => handlePress(canGoBack)}
          />
        ),
        headerTitleAlign: "center",
      }}*/
    >
      <Stack.Screen name="index"/>
      <Stack.Screen name="newPage" />
    </Stack>
  );
}
