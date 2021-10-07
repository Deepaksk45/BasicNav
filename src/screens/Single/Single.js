import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';

import styles from './style';
export default () => {
  const {params} = useRoute();
  const {userId, id, title, body} = params;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>UserId</Text>
        <Text style={styles.value}>: {userId}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>ID</Text>
        <Text style={styles.value}>: {id}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Title</Text>
        <Text style={styles.value}>: {title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Body</Text>
        <Text style={styles.value}>: {body}</Text>
      </View>
    </View>
  );
};
