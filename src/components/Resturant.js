import { StyleSheet, Text, View, Image,Pressable } from 'react-native'
import React from 'react'
import { elevation } from './../common/styles';
import {useNavigation} from '@react-navigation/native';

const Resturant = ({item}) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("ResturamtScreen", {id:item.id})} style={({pressed}) => pressed?styles.container2:styles.container}>
            <Image style={styles.img} source={{uri: item.image_url}} />
            <View>
                <Text style={{fontSize:16, fontWeight:"bold", color:"#555"}}>{item.name}</Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={{marginRight:10}}>{item.rating}</Text>
                    <Text style={{color:"red"}}>{item.price}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Resturant

const styles = StyleSheet.create({
    container: {
        marginHorizontal:25,
        flexDirection:"row",
        alignItems:"center",
        marginVertical:5,
        backgroundColor:"white",
        padding:5,
        borderRadius:50,
        ...elevation
    },
    container2: {
        marginHorizontal:25,
        flexDirection:"row",
        alignItems:"center",
        marginVertical:5,
        backgroundColor:"#eee",
        padding:5,
        borderRadius:50,
        ...elevation
    },
    img: {
        width:50, 
        height:50,
        borderRadius:50,
        marginRight:10
    }
})