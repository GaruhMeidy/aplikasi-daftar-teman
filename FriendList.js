import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const friends = [
  { id: '1', name: 'John Doe', description: 'John is a software engineer.' },
  { id: '2', name: 'Jane Smith', description: 'Jane is a project manager.' },
  // Tambahkan daftar teman lainnya di sini
];

const FriendList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('FriendDetail', { friend: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  name: {
    fontSize: 18,
  },
});

export default FriendList;
