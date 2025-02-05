import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailScreen from '../screens/DetailScreen/DetailScreen';


/*const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={DetailScreen} />
    </Tab.Navigator>
  );
}*/

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} // Pass HomeScreen component here directly
      />
      <Tab.Screen 
        name="Detail" 
        component={DetailScreen}
      />
    </Tab.Navigator>
  );
}
