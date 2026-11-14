// ItineraryScreen.js — Day-by-day itinerary with previous/next navigation

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function ItineraryScreen({ route }) {
  const { trip } = route.params;

  // useState tracks which day is currently displayed
  // currentDay starts at 0 (Day 1)
  const [currentDay, setCurrentDay] = useState(0);

  const day = trip.itinerary[currentDay];
  const isFirstDay = currentDay === 0;
  const isLastDay = currentDay === trip.itinerary.length - 1;

  return (
    <View style={styles.container}>
      {/* Day counter */}
      <Text style={styles.dayCounter}>
        Day {currentDay + 1} of {trip.itinerary.length}
      </Text>

      {/* Day content */}
      <ScrollView style={styles.content}>
        <Text style={styles.dayTitle}>{day.title}</Text>

        {day.activities.map((activity, index) => (
          <View key={index} style={styles.activityCard}>
            <Text style={styles.activityText}>• {activity}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Previous / Next navigation buttons */}
      <View style={styles.navRow}>
        <TouchableOpacity
          style={[styles.navButton, isFirstDay && styles.navButtonDisabled]}
          onPress={() => { if (!isFirstDay) setCurrentDay(currentDay - 1); }}
          disabled={isFirstDay}
        >
          <Text style={[styles.navText, isFirstDay && styles.navTextDisabled]}>
            ← Previous
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, isLastDay && styles.navButtonDisabled]}
          onPress={() => { if (!isLastDay) setCurrentDay(currentDay + 1); }}
          disabled={isLastDay}
        >
          <Text style={[styles.navText, isLastDay && styles.navTextDisabled]}>
            Next →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  dayCounter: {
    textAlign: 'center',
    fontSize: 14,
    color: '#999',
    paddingTop: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  dayTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  activityText: {
    fontSize: 15,
    color: '#444',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  navButton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  navButtonDisabled: {
    backgroundColor: '#ccc',
  },
  navText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  navTextDisabled: {
    color: '#999',
  },
});
