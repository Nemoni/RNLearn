import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import React from 'react';

const Data = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
];

const renderItem = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.text}>{item.title}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatlist}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  flatlist: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'pink',
    borderwidth: 1,
    borderColor: 'black',
    width: 200,
    height: 30,
  },
  text: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});
