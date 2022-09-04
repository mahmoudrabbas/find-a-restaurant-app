import { ActivityIndicator, StyleSheet, Text, View, Image, FlatList, Dimensions, Modal, Button, Pressable } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import React, {useEffect, useState} from 'react'
import useResturant from '../hooks/useResturant';


const ResturamtScreen = ({route}) => {
    const [showModal, setShowModal] = useState(false);
    const [link, setLink] = useState("");
    const {id} = route.params;
    const [{data, loading, error}, getRestuarant] = useResturant(); 
    const dimension = Dimensions.get("window");
    const w = dimension.width;
    const h = Math.round((dimension.height*9)/16);
    const handleOpenModal = (link) => {
        setLink(link);
        setShowModal(true);
    }
    useEffect(() => {
        getRestuarant(id);
    }, [])
    return (
        <View style={styles.container}>
            <Modal visible={showModal}>
                <View style={styles.modal}>
                    <Pressable onPress={() => setShowModal(false)} style={{alignSelf:'flex-end'}}>
                        <FontAwesome name='close' size={25} />
                    </Pressable>
                    <Image source={{uri: link}} style={{width:w, height:h, marginVertical:5 }} />
                </View>
            </Modal>
            {loading? (<ActivityIndicator color="#ff0000" size="large" marginHorizontal={30} />): (
                error? (<Text style={{color:"red", fontSize:20, fontWeight:"600", textAlign:"center"}}>{error}</Text>):(
                        <View style={styles.restaurant}>
                            <Text style={styles.head}>{data?.name} Restaurant</Text>
                            <View style={styles.view2}>
                                <Text style={{fontSize:16, color:"#333"}}>{data?.rating}</Text>
                                <Text style={{fontSize:16, color:"brown"}}>{data?.price}</Text>
                            </View>
                            {
                                <FlatList 
                                data={data?.photos}
                                renderItem={({item}) => {
                                    return (
                                        <Pressable onPress={() => handleOpenModal(item)} style={{flex:1}}>
                                            <Image source={{uri: item}} style={{width:w, height:h, marginVertical:5 }} />
                                        </Pressable>
                                    )
                                }}
                                keyExtractor = {(item) => item}
                                showsVerticalScrollIndicator={false}
                                />
                            }
                        </View>
                    )
                )
            }
        </View>
    )
}

export default ResturamtScreen

const styles = StyleSheet.create({
    container: {
        marginTop:60,
        paddingBottom:192
    },
    restaurant: {
        marginHorizontal:4
    },
    head: {
        fontSize:25,
        fontWeight:"700",
        padding:10
    },
    view2: {
        flexDirection:"row", 
        justifyContent:"space-between", 
        padding:10,
        borderBottomWidth:1,
        borderColor:"#ccc",
    },
    modal: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})