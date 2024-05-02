import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import Style from '../Styles/Style';

const History = ({ books }) => {
  return (
    <SafeAreaView style={Style.containerColour}>
      <View>
        <Text style={Style.HeaderText}>Last 3 Books Read</Text>
        <FlatList
          data={books}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text>Title: {item.title}</Text>
              <Text>Author: {item.author}</Text>
              <Text>Genre: {item.selectedGenres.join(', ')}</Text>
              <Text>Number of Pages: {item.numPages}</Text>
              <View style={{ borderBottomWidth: 1, marginVertical: 5 }} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default History;