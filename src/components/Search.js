import { StyleSheet, Text, View, TextInput } from 'react-native'
import {FontAwesome} from '@expo/vector-icons';
import {elevation} from '../common/styles'
import {useState} from 'react';


const Search = ({setTerm}) => {
    const [input, setInput] = useState("");
    const handleOnEndEditing = () => {
        setTerm(input);
        setInput("")
    }
    return (
        <View style={styles.constainer}>
            <FontAwesome name='search' color={"red"} style={{fontSize:20, marginRight:10}} />
            <TextInput 
            style={{fontSize:18}} 
            placeholder='Restuarants, food' 
            onChangeText={(text) => setInput(text)} 
            value={input} 
            onEndEditing={handleOnEndEditing}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    constainer: {
        flexDirection:"row",
        marginHorizontal:25,
        padding:10,
        alignItems:"center",
        borderRadius:30,
        backgroundColor:"#fff",
        marginTop:5,
        ...elevation,
    }
})