// App.js — Navigation setup using React Navigation stack navigator

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TripsScreen from './screens/TripsScreen';
import TripDetailScreen from './screens/TripDetailScreen';
import ItineraryScreen from './screens/ItineraryScreen';
import PackingScreen from './screens/PackingScreen';
import BudgetScreen from './screens/BudgetScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Trips"
        screenOptions={{
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Trips"
          component={TripsScreen}
          options={{ title: '✈️ Travel Planner' }}
        />
        <Stack.Screen
          name="TripDetail"
          component={TripDetailScreen}
          options={({ route }) => ({ title: route.params.trip.name })}
        />
        <Stack.Screen
          name="Itinerary"
          component={ItineraryScreen}
          options={{ title: 'Itinerary' }}
        />
        <Stack.Screen
          name="Packing"
          component={PackingScreen}
          options={{ title: 'Packing Checklist' }}
        />
        <Stack.Screen
          name="Budget"
          component={BudgetScreen}
          options={{ title: 'Budget Breakdown' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
