import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import Header from './../components/Header';
import Category from './../components/Category';
import Restaurants from './../components/Restaurants';
import Search from './../components/Search';


const Home = () => {
    const [term, setTerm] = useState("Burger");
    return (
        <View style={styles.container}>
            <Header />
            <Search setTerm={setTerm} />
            <Category term={term} setTerm={setTerm} />
            <Restaurants term={term} />
            <StatusBar />
        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#f9f9f9"
    }
})