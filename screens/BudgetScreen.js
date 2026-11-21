// BudgetScreen.js — Visual budget breakdown with bars

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function BudgetScreen({ route }) {
  const { trip } = route.params;
  const breakdown = trip.budgetBreakdown;

  // Find the maximum amount to scale bars proportionally
  const maxAmount = Math.max(...Object.values(breakdown));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.totalCard}>
        <Text style={styles.totalLabel}>Total Budget</Text>
        <Text style={styles.totalAmount}>₹{trip.budget}</Text>
      </View>

      {Object.entries(breakdown).map(([category, amount]) => {
        const percentage = Math.round((amount / trip.budget) * 100);
        const barWidth = `${(amount / maxAmount) * 100}%`;

        return (
          <View key={category} style={styles.categoryCard}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryName}>{category}</Text>
              <Text style={styles.categoryAmount}>₹{amount}</Text>
            </View>
            {/* Visual bar */}
            <View style={styles.barBackground}>
              <View style={[styles.barFill, { width: barWidth }]} />
            </View>
            <Text style={styles.percentage}>{percentage}% of budget</Text>
          </View>
        );
      })}

      <Text style={styles.disclaimer}>
        * These are estimated allocations for planning purposes
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  totalCard: {
    backgroundColor: '#2196F3',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  totalLabel: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },
  totalAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    elevation: 1,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  categoryAmount: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: 'bold',
  },
  barBackground: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 4,
  },
  barFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  percentage: {
    fontSize: 12,
    color: '#999',
  },
  disclaimer: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 30,
  },
});
