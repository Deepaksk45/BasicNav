import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';

import {Post} from '../../components';

import styles from './style';
export default () => {
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState('');

  const fatchPosts = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(async (data) => {
        setPosts(data);
        setLoaded(true);
      })
      .catch(async (err) => {
        console.log('Failed to fetch the data from storage', err);
        console.log(err);
      });
  };

  useEffect(() => {
    fatchPosts();
  }, []);

  return !loaded ? (
    <View style={styles.splash}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  ) : (
    <SafeAreaView style={styles.body}>
      <FlatList
        scrollToOverflowEnabled={true}
        data={posts}
        keyExtractor={(item) => parseInt(item.id)}
        renderItem={({item, index}) => {
          return <Post item={item} />;
        }}
      />
    </SafeAreaView>
  );
};
