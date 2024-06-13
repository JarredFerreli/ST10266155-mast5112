import React from 'react';
import { SafeAreaView, FlatList, View, Text, Image } from 'react-native';
import Style from '../Styles/Style';

const History = ({ books }) => {
  // code for last 3 books entered by the user.
  const recentBooks = books.slice(0, 3);

  return (
    <SafeAreaView style={Style.containerColour}>
      <View>
        <Text style={Style.HeaderText}>Last 3 Books Read</Text>
        <FlatList
          data={recentBooks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>

              <Text style={Style.historyText}>
                Title:
              </Text>
              <Text style={Style.historyBookTitle}>
                {item.title}
              </Text>

              <Text style={Style.historyDisplay}>
                Author: 
              </Text>
              <Text style={Style.historyBookAuthor}>
                {item.author}
              </Text>

              <Text style={Style.historyDisplay}>
                Genre: 
              </Text>
              <Text style={Style.historyBookGenre}>
                {item.selectedGenres.join(', ')}
              </Text>

              <Text style={Style.historyDisplay}>
                Number of Pages: 
              </Text>
              <Text style={Style.historyBookNumber}>
                {item.numPages}
              </Text>
              <View style={{ marginVertical: 5 }} />
            </View>
          )}
        />
      </View>
      <View>
        <Image 
          style = {Style.ImageHistory}
          source = {require('../Images/SoManyBooks.png')} 
        />
      </View>
    </SafeAreaView>
  );
};

export default History;