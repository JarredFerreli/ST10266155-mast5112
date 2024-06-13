import React, { useState } from 'react';
import Style from '../Styles/Style';
import { SafeAreaView, ScrollView, View, Text, TextInput, Button, Image } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

//Genre arrays which is desplayed in the genre drop down list.
const Genre = [
    { key: 'Horror', value: 'Horror' },
    { key: 'Romance', value: 'Romance' },
    { key: 'Mystery', value: 'Mystery' },
    { key: 'Thriller', value: 'Thriller' },
    { key: 'Fantasy', value: 'Fantasy' },
    { key: 'Non-Fiction', value: 'Non-Fiction' },
    { key: 'Others', value: 'Others' },
];

const NewBook = ({ setBooks, setLastBook, updateGenreCounts }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [numPages, setNumPages] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [resetKey, setResetKey] = useState(false);

    //handles when the user adds a book.
    const handleAddBook = () => {
        let allFieldsFilled = false;
        while (!allFieldsFilled) {
            if (!title || !author || selectedGenres.length === 0 || !numPages) {
                alert('Please fill in all details.');//alert if user adds a book when there is an empty TextInput.
                return;
            } else {
                allFieldsFilled = true;
            }
        }
        addBook(title, author, selectedGenres, numPages);
        setTitle('');
        setAuthor('');
        setSelectedGenres([]);
        setNumPages('');
        setResetKey(prevKey => !prevKey);
    };
    //handles my clear button so when pressed the TextInputs will clear.
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
        //this is a for in loop to count the genres.
        let isArray = false;
        for (const key in selectedGenres) {
            if (selectedGenres.hasOwnProperty(key)) {
                isArray = true;
                break;
            }
        }

        if (isArray) {
            updateGenreCounts(selectedGenres);
        }
        //alert to say book added.
        alert('Book added successfully!');
    };

    return (
        <SafeAreaView style={Style.containerColour}>
            <ScrollView>
                <View>
                    <Text style={Style.HeaderText}>New Book Entry</Text>
                    <Text style={Style.NewBookText}>Title</Text>
                    <TextInput
                        style={Style.input}
                        placeholder="e.g. The Outsider"
                        onChangeText={text => setTitle(text)}
                        value={title}
                    />
                    <Text style={Style.NewBookText}>Author</Text>
                    <TextInput
                        style={Style.input}
                        placeholder="e.g. Stephen King"
                        onChangeText={text => setAuthor(text)}
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
                        style={Style.inputNum}
                        placeholder="e.g. 576"
                        keyboardType="numeric"
                        onChangeText={text => setNumPages(text)}
                        value={numPages}
                    />
                    <View style={Style.buttonOne}>
                        <Button
                            color={'#E9DDCE'}
                            title="Clear"
                            onPress={handleClear}
                        />
                    </View>
                    <View style={Style.buttonTwo}>
                        <Button
                            color={'#E9DDCE'}
                            title="Add Book"
                            onPress={handleAddBook}
                        />
                    </View>
                    <View>
                        <Image
                            style={Style.ImageNewBooks}
                            source={require('../Images/GreenBookDragon.png')}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewBook;