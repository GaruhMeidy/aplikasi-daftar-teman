import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FriendDetail = ({ route }) => {
  const { friend } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.description}>{friend.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default FriendDetail;
