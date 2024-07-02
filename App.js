import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';

const friends = [
  { id: '1', name: 'ALDY RAMADANI', description: 'Mahasiswa yang penyabar dan rajin menabung ' },
  { id: '2', name: 'MUHAMMAD RAFI', description: 'Mahasiswa yang cerdas serta ramah dan periang.' },
  { id: '3', name: 'WILI SEPTIANDI', description: 'Mahasiswa yang rajin dalam ibadah serta tidak pernah melawan orang tua' },
  { id: '4', name: 'KEVIN SAPUTRA RISNANDAR', description: 'Mahasiswa pekerja keras dan pantang menyerah dalam semua rintangan' },
  { id: '5', name: 'AGUNG PRAYOGA', description: 'Mahasiswa yang gemar berolahraga dan sangat tegas dalam menjalankan amanah' },
];

export default function App() {
  const showAlert = (description) => {
    Alert.alert('Friend Description', description, [{ text: 'OK' }]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Button title="View Details" onPress={() => showAlert(item.description)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    width: '90%',
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
  },
});