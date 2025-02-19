// app/tabs/_layout.tsx
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    // Aquí se define la estructura general de las pestañas
    <Tabs>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Detail" />
    </Tabs>
  );
}
