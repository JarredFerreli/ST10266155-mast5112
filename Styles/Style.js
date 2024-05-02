import React from "react";
import { StyleSheet} from "react-native";

const Style = StyleSheet.create({
    HeaderText: {
        color: 'black',
        fontSize: 25,
        marginTop: 40,
        textAlign: 'center'
    },
    Text: {
        color: 'black',
        fontSize: 15,
        marginTop: 25,
        marginLeft: 50,
        marginRight: 50
    },
    NewBookText: {
        color: 'black',
        textAlign: 'right',
        fontSize: 15,
        marginTop: 40,
        marginLeft: 50,
        marginRight: 300
    },
    TextUnder: {
        color: '#1C1B1B',
        fontSize: 15,
        marginLeft: 60
    },
    input: {
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "#E9DDCE",
        marginTop: -25,
        padding: 2,
        marginLeft: 130,
        marginRight: 50
    },
    genreSt: {
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: '#E9DDCE',
        marginTop: -35,
        marginLeft: 130,
        marginRight: 50,
      },
    inputNum: {
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "#E9DDCE",
        marginTop: -35,
        padding: 2,
        marginLeft: 130,
        marginRight: 50
    },
    containerColour: {
        flex: 1,
        backgroundColor: "#998770",
    },
    buttonOne: {
        marginTop: 20,
        marginLeft: 100,
        marginRight: 210,
    },
    buttonTwo: {
        marginTop: -35,
        marginLeft: 210,
        marginRight: 100,
    },
});

export default Style;