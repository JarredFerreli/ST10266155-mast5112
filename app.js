import React from "react";

//importing all my screens
import Home from './screens/Home';
import NewBook from "./screens/NewBook";
import History from "./screens/History";
import TotalGenres from "./screens/TotalGenres";

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator()

const App = ()=>{

    //useState's
    const [books, setBooks] = useState([]);
    const [lastBook, setLastBook] = useState(null);
    const [genreCounts, setGenreCounts] = useState({
        Horror: 0,
        Romance: 0,
        Mystery: 0,
        Thriller: 0,
        Fantasy: 0,
        'Non-Fiction': 0,
        Others: 0,
    });
    
    //handles and stores the new books added
    const addBook = (title, author, selectedGenres, numPages) => {
      const newBook = { title, author, selectedGenres, numPages };
      setBooks(prevBooks => [newBook, ...prevBooks]);
      setLastBook(newBook);
      updateGenreCounts(selectedGenres);
    };
    
    //handles and stores the tally array for my genre counter.
    const updateGenreCounts = (genres) => {
        const newGenreCounts = { ...genreCounts };
        for (let i = 0; i < genres.length; i++) {
            const genre = genres[i];
            if (newGenreCounts[genre] !== undefined) {
                newGenreCounts[genre]++;
            }
        }
        setGenreCounts(newGenreCounts);
    };

    return(
        <NavigationContainer>
            <StatusBar 
            backgroundColor="#BDAC98"/>
            <Tab.Navigator screenOptions={{               
                tabBarLabelPosition:"below-icon",
                tabBarShowLabel: true,
                tabBarActiveBackgroundColor: "#70604C",
                tabBarInactiveBackgroundColor: "#E9DDCE",
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "black",
                headerShown: false
            }}>

                <Tab.Screen name="Home"
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 15,
                            marginBottom: 5,
                        },
            
                        tabBarIcon: () =>(
                            <AntDesign
                            name="home"
                            color={'black'}
                            size={20}
                            >
                                
                            </AntDesign>
                        )
                    }}>
                    
                    {() => <Home books={books} lastBook={lastBook} />}

                </Tab.Screen>

                <Tab.Screen name="Add book"
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 15,
                            marginBottom: 5,
                        },
                        tabBarIcon: ({color, size}) =>(
                            <Ionicons 
                                name='add'
                                color={'black'}
                                size={20}
                            >

                            </Ionicons>
                        )
                    }}>

                    {() => <NewBook setBooks={setBooks} setLastBook={setLastBook} updateGenreCounts={updateGenreCounts} />}

                </Tab.Screen>

                <Tab.Screen name="History"
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 15,
                            marginBottom: 5,
                        },
                        tabBarIcon: ({color, size}) =>(
                            <MaterialIcons 
                            name='history'
                            color={'black'}
                            size={20}
                            >

                            </MaterialIcons>
                        )
                    }}>

                    {() => <History books={books} />}

                </Tab.Screen>

                <Tab.Screen name="Genre"
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 15,
                            marginBottom: 5,
                        },
                        tabBarIcon: ({color, size}) =>(
                            <MaterialIcons 
                            name='list'
                            color={'black'}
                            size={20}
                            >

                            </MaterialIcons>
                        )
                    }}>

                    {() => <TotalGenres genreCounts={genreCounts} />}
                    
                </Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;