import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import Style from '../Styles/Style';

//{genreCounts. .. } is for the tally array where the user will see homay genres they have read.
const TotalGenres = ({ genreCounts }) => {
    return (
        <SafeAreaView style={Style.containerColour}>
            <ScrollView>
                <View>
                    <Text style={Style.HeaderText}>Genre History Tally</Text>

                    <Text style={Style.Text}>Horror: {genreCounts.Horror}</Text>
                    <Text style={Style.Text}>Romance: {genreCounts.Romance}</Text>
                    <Text style={Style.Text}>Mystery: {genreCounts.Mystery}</Text>
                    <Text style={Style.Text}>Thriller: {genreCounts.Thriller}</Text>
                    <Text style={Style.Text}>Fantasy: {genreCounts.Fantasy}</Text>
                    <Text style={Style.Text}>Non-Fiction: {genreCounts['Non-Fiction']}</Text>
                    <Text style={Style.Text}>Others: {genreCounts.Others}</Text>
                </View>
                <View>
                    <Image 
                        style = {Style.ImageGenres}
                        source = {require('../Images/CuteKawaiiDragon.png')} 
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TotalGenres;