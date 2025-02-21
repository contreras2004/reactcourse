import React from "react";
import { Slot } from "expo-router";
import { MemeProvider } from "@/services/MemeProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <MemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot />
      </GestureHandlerRootView>
    </MemeProvider>
  );
}
