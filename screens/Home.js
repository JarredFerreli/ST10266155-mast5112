import * as React from 'react';
import { useState, useEffect } from 'react';
import Style from '../Styles/Style';
import { SafeAreaView, View, Text } from "react-native";

const Home = ({ books }) => {
    const [totalPagesRead, setTotalPagesRead] = useState(0);
    const [lastBook, setLastBook] = useState(null);
    const [averagePages, setAveragePages] = useState(0);

    useEffect(() => {
        if (books && books.length > 0) {
        let total = 0;
        books.forEach(book => {
            total += parseInt(book.numPages);
        });
        setTotalPagesRead(total);

        const numBooks = books.length;
        const totalPages = books.reduce((acc, book) => acc + parseInt(book.numPages), 0);
        const average = totalPages / numBooks;

        const formattedAverage = average.toFixed(2);

            setAveragePages(formattedAverage);
            setLastBook(books[0]);
        } else {
            setTotalPagesRead(0);
            setLastBook(null);
            setAveragePages(0);
        }
        }, [books]);

    return (
        <SafeAreaView style={Style.containerColour}>
            <View>
                <Text style={Style.HeaderText}>Last book read</Text>
            </View>
            <View>
                <Text style={Style.Text}>Title:</Text>
            </View>
            {lastBook && (
                <View>
                    <Text style={Style.TextUnder}>{lastBook.title}</Text>
                </View>
            )}
            <View>
                <Text style={Style.Text}>Author:</Text>
            </View>
            {lastBook && (
                <View>
                    <Text style={Style.TextUnder}>{lastBook.author}</Text>
                </View>
            )}
            <View>
                <Text style={Style.Text}>Genre:</Text>
            </View>
            {lastBook && (
                <View>
                    <Text style={Style.TextUnder}>{lastBook.selectedGenres.join(', ')}</Text>
                </View>
            )}
            <View>
                <Text style={Style.Text}>Number of pages:</Text>
            </View>
            {lastBook && (
                <View>
                    <Text style={Style.TextUnder}>{lastBook.numPages}</Text>
                </View>
            )}

            <View>
                <Text style={Style.HeaderText}>Total pages read</Text>
            </View>
            <View>
                <Text style={Style.Text}>Pages:</Text>
                <Text style={Style.TextUnder}>{totalPagesRead}</Text>
            </View>

            <View>
                <Text style={Style.HeaderText}>Average pages read per book</Text>
            </View>
            <View>
                <Text style={Style.Text}>Pages:</Text>
                <Text style={Style.TextUnder}>{averagePages}</Text>
            </View>
        </SafeAreaView>
    );
};

export default Home;