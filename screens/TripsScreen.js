// TripsScreen.js — Shows all available trips as a tappable list + Create Trip button

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function TripsScreen({ navigation, trips, onAddTrip }) {
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
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Your Trips</Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('CreateTrip', { onAddTrip })}
        >
          <Text style={styles.createButtonText}>+ Plan Trip</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={trips}
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  createButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
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
