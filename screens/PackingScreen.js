// PackingScreen.js — Tap to toggle packed/unpacked items

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function PackingScreen({ route }) {
  const { trip } = route.params;

  // useState with the packing list — each toggle causes a re-render
  const [packingList, setPackingList] = useState(trip.packingList);

  // Toggle the packed status of an item at the given index
  const toggleItem = (index) => {
    const updatedList = [...packingList]; // spread operator creates a copy
    updatedList[index] = {
      ...updatedList[index],             // copy the item object
      packed: !updatedList[index].packed, // flip the boolean
    };
    setPackingList(updatedList);
  };

  // Count how many items are packed
  const packedCount = packingList.filter((item) => item.packed).length;

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.item, item.packed && styles.itemPacked]}
      onPress={() => toggleItem(index)}
    >
      <Text style={styles.icon}>{item.packed ? '✅' : '⬜'}</Text>
      <Text style={[styles.itemText, item.packed && styles.itemTextPacked]}>
        {item.item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Progress summary */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {packedCount} of {packingList.length} items packed
        </Text>
        {/* Simple progress bar using View width */}
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${(packedCount / packingList.length) * 100}%` },
            ]}
          />
        </View>
      </View>

      {/* Packing items list */}
      <FlatList
        data={packingList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  list: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 8,
    elevation: 1,
  },
  itemPacked: {
    backgroundColor: '#E8F5E9',
  },
  icon: {
    fontSize: 20,
    marginRight: 12,
  },
  itemText: {
    fontSize: 15,
    color: '#333',
  },
  itemTextPacked: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
