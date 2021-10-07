import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default (props) => {
  const navigation = useNavigation();
  const {userId, id, title, body} = props.item;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Single', props.item)}>
      <View key={parseInt(id)} style={styles.body}>
        <View>
          <View>
            <Text style={styles.title}>Title : {title}</Text>
          </View>
          <View>
            <Text style={styles.title}>ID : {id}</Text>
          </View>
          <View>
            <Text style={styles.title}>Body : {body}</Text>
          </View>
          <View>
            <Text style={styles.title}>User ID : {userId}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.icon}>></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 110,
    marginBottom: 10,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 10,
    shadowOpacity: 0.9,
    shadowRadius: 44,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: 48,
  },
  title: {
    fontSize: 10,
    flexShrink: 1,
  },
  metaBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
