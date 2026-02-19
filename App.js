import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MealProvider } from './src/context/MealContext';
import MealMenuScreen from './src/screens/MealMenuScreen';
import AdminScreen from './src/screens/AdminScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <MealProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: true }}>
          <Tab.Screen name="Meal Menu" component={MealMenuScreen} />
          <Tab.Screen name="Admin" component={AdminScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </MealProvider>
  );
}