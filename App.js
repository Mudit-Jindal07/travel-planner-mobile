// App.js — Navigation setup using React Navigation stack navigator

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import sampleTrips from './data/sampleTrips';
import TripsScreen from './screens/TripsScreen';
import TripDetailScreen from './screens/TripDetailScreen';
import ItineraryScreen from './screens/ItineraryScreen';
import PackingScreen from './screens/PackingScreen';
import BudgetScreen from './screens/BudgetScreen';
import CreateTripScreen from './screens/CreateTripScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  // State holds all trips; users can add new ones
  const [trips, setTrips] = useState(sampleTrips);

  const handleAddTrip = (newTrip) => {
    setTrips([newTrip, ...trips]);
  };

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
          options={{ title: '✈️ Travel Planner' }}
        >
          {(props) => (
            <TripsScreen
              {...props}
              trips={trips}
              onAddTrip={handleAddTrip}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="CreateTrip"
          component={CreateTripScreen}
          options={{ title: 'Plan a New Trip' }}
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
