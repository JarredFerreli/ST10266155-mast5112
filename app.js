import React from "react";


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

    const [books, setBooks] = useState([]);
    const [lastBook, setLastBook] = useState(null);
  
    const addBook = (title, author, selectedGenres, numPages) => {
      const newBook = { title, author, selectedGenres, numPages };
      setBooks(prevBooks => [newBook, ...prevBooks]);
      setLastBook(newBook);
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

                    {() => <NewBook setBooks={setBooks} setLastBook={setLastBook} />}

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

                <Tab.Screen name="Genre" component={TotalGenres}
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
                </Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;