// TripsScreen.js — Shows all available trips as a tappable list

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import sampleTrips from '../data/sampleTrips';

export default function TripsScreen({ navigation }) {
  // renderItem is called for each trip in the FlatList
  const renderTrip = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('TripDetail', { trip: item })}
    >
      <Text style={styles.tripName}>{item.name}</Text>
      <Text style={styles.tripInfo}>
        {item.destination} · {item.days} days · ₹{item.budget}
      </Text>
      <Text style={styles.tripInterests}>
        {item.interests.join(' · ')}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Trips</Text>
      <FlatList
        data={sampleTrips}
        keyExtractor={(item) => item.id}
        renderItem={renderTrip}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tripName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  tripInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  tripInterests: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },
});
