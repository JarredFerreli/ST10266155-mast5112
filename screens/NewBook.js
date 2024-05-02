import * as React from 'react';
import Style from '../Styles/Style';

import { SafeAreaView, ScrollView, View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const Genre = [
    { key: 'Horror', value: 'Horror' },
    { key: 'Romance', value: 'Romance' },
    { key: 'Mystery', value: 'Mystery' },
    { key: 'Thriller', value: 'Thriller' },
    { key: 'Fantasy', value: 'Fantasy' },
    { key: 'Non-Fiction', value: 'Non-Fiction' },
    { key: 'Others', value: 'Others' },
  ];
  
  const NewBook = ({ setBooks, setLastBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [numPages, setNumPages] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [resetKey, setResetKey] = useState(false);
  
    const handleAddBook = () => {
      if (!title || !author || selectedGenres.length === 0 || !numPages) {
        alert('Please fill in all details.');
        return;
      }
      addBook(title, author, selectedGenres, numPages);
      setTitle('');
      setAuthor('');
      setSelectedGenres([]);
      setNumPages('');
      setResetKey(prevKey => !prevKey);
    };

    const handleClear = () => {
        setTitle('');
        setAuthor('');
        setSelectedGenres([]);
        setNumPages('');
        setResetKey(prevKey => !prevKey);
    };
  
    const addBook = (title, author, selectedGenres, numPages) => {
      const newBook = { title, author, selectedGenres, numPages };
      setBooks(prevBooks => [newBook, ...prevBooks]);
      setLastBook(newBook);
      alert('Book added successfully!');
    };
    return(
        <SafeAreaView style={Style.containerColour}>
            <ScrollView>
            <View>
                <Text style={Style.HeaderText}>New Book Entry</Text>
                <Text style={Style.NewBookText}>Title</Text> 
                <TextInput 
                    style= {Style.input} 
                    placeholder='e.g. The Outsider' 
                    onChangeText = {text => setTitle(text)}
                    value={title}
                />
                <Text style={Style.NewBookText}>Author</Text>
                <TextInput 
                    style= {Style.input} 
                    placeholder='e.g. Stephen King'
                    onChangeText = {text => setAuthor(text)}
                    value={author}
                    />
                <Text style={Style.NewBookText}>Genre</Text>
                <View style={Style.genreSt}>
                    <MultipleSelectList
                        key={resetKey ? 'reset' : 'normal'}
                        setSelected={val => setSelectedGenres(val)}
                        data={Genre}
                        save="value"
                        label="Genres"
                    />
                </View>
                <Text style={Style.NewBookText}>Number of pages</Text>
                <TextInput 
                    style= {Style.inputNum} 
                    placeholder='e.g. 576' 
                    keyboardType='numeric'
                    onChangeText = {text => setNumPages(text)}
                    value={numPages}
                />
                <View style={Style.buttonOne}>
                    <Button 
                        color={"#E9DDCE"}
                        title="clear" 
                        onPress={handleClear}
                    />
                </View>
                <View style={Style.buttonTwo}>
                    <Button 
                        color={"#E9DDCE"}
                        title="Add Book" 
                        onPress={handleAddBook} 
                    />
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )

}; 


export default NewBook;