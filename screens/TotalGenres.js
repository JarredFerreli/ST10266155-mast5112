import * as React from 'react';
import Style from '../Styles/Style';

import {SafeAreaView, ScrollView, View, Text} from "react-native";


const TotalGenres = (  ) => {
    return(
        <SafeAreaView style={Style.containerColour}>
            <View>
                <Text style={Style.welcomeText}>Total genre read</Text>
            </View>
        </SafeAreaView>
    )

}; 



export default TotalGenres;