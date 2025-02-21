import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="(stack)"
                options={{
                title: "Meme Selector",
                headerTitleAlign: "center",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
                }}
            />
            <Tabs.Screen
                name="newPage"
                options={{
                title: "NewPage",
                headerTitleAlign: "center",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="albums" size={size} color={color} />
                ),
                }}
            />
        </Tabs>
    );
}
    