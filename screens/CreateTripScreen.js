// CreateTripScreen.js — Simple form to create a new trip

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

export default function CreateTripScreen({ navigation, route }) {
  // Simple form state
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('Paris');
  const [days, setDays] = useState('3');
  const [budget, setBudget] = useState('30000');

  // Callback passed from parent to update the trip list
  const { onAddTrip } = route.params;

  const handleCreate = () => {
    if (!name.trim()) {
      Alert.alert('Required', 'Please enter a trip name.');
      return;
    }

    const numDays = parseInt(days) || 3;
    const numBudget = parseInt(budget) || 30000;

    // Automatically build a simple day-by-day itinerary
    const itinerary = [];
    for (let i = 1; i <= numDays; i++) {
      itinerary.push({
        day: i,
        title: `Day ${i} — Exploring ${destination}`,
        activities: [
          `Morning: City walk in ${destination}`,
          `Afternoon: Local sightseeing and lunch`,
          `Evening: Dinner & relax`,
        ],
      });
    }

    // Automatically estimate budget breakdown
    const budgetBreakdown = {
      Accommodation: Math.round(numBudget * 0.35),
      Food: Math.round(numBudget * 0.25),
      Transport: Math.round(numBudget * 0.15),
      Activities: Math.round(numBudget * 0.15),
      Shopping: Math.round(numBudget * 0.10),
    };

    // Standard essentials checklist
    const packingList = [
      { item: 'ID / Passport', packed: false },
      { item: 'Comfortable walking shoes', packed: false },
      { item: 'Phone charger & power bank', packed: false },
      { item: 'Weather-appropriate clothes', packed: false },
      { item: 'Toiletries & essentials', packed: false },
      { item: 'Reusable water bottle', packed: false },
    ];

    const newTrip = {
      id: Date.now().toString(),
      name: name.trim(),
      destination: destination.trim(),
      days: numDays,
      budget: numBudget,
      interests: ['Sightseeing', 'Food', 'Culture'],
      itinerary,
      budgetBreakdown,
      packingList,
    };

    onAddTrip(newTrip);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Trip Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Summer Vacation"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Destination</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Paris, Tokyo, Goa"
          value={destination}
          onChangeText={setDestination}
        />

        <Text style={styles.label}>Duration (Days)</Text>
        <TextInput
          style={styles.input}
          placeholder="3"
          keyboardType="numeric"
          value={days}
          onChangeText={setDays}
        />

        <Text style={styles.label}>Budget (₹)</Text>
        <TextInput
          style={styles.input}
          placeholder="30000"
          keyboardType="numeric"
          value={budget}
          onChangeText={setBudget}
        />

        <TouchableOpacity style={styles.button} onPress={handleCreate}>
          <Text style={styles.buttonText}>✓ Save Trip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
