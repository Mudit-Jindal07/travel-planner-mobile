// TripDetailScreen.js — Shows trip overview with buttons to sub-screens

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function TripDetailScreen({ route, navigation }) {
  // route.params contains the data passed from the previous screen
  const { trip } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Trip info card */}
      <View style={styles.infoCard}>
        <Text style={styles.destination}>{trip.destination}</Text>
        <Text style={styles.detail}>📅 {trip.days} days</Text>
        <Text style={styles.detail}>💰 ₹{trip.budget}</Text>
        <Text style={styles.detail}>
          🏷️ {trip.interests.join(', ')}
        </Text>
      </View>

      {/* Navigation buttons to sub-screens */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Itinerary', { trip })}
      >
        <Text style={styles.buttonText}>📋 View Itinerary</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Packing', { trip })}
      >
        <Text style={styles.buttonText}>🎒 Packing Checklist</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Budget', { trip })}
      >
        <Text style={styles.buttonText}>💰 Budget Breakdown</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  destination: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 12,
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
