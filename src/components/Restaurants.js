import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList, ActivityIndicator } from 'react-native'
import useResturants from '../hooks/useResturants';
import Resturant from './Resturant';

const Restaurants = (term) => {

    const [{data, loading, error}, getRestuarants] = useResturants(); 

    useEffect(() => {
        getRestuarants(term)
    }, [term])
    return (
        <View style={styles.container}>
            {loading? (<ActivityIndicator color="#ff0000" size="large" marginHorizontal={30} />): (
                error? (<Text style={{color:"red", fontSize:18, fontWeight:"600", textAlign:"center"}}>{error}</Text>):(
                    data?.length===0? (<Text style={{color:"red", fontSize:18, fontWeight:"600", textAlign:"center"}}>Resturants Are Not Found</Text>):(
                        <>
                            <Text style={{fontSize:20, fontWeight:"600", color:"red", marginHorizontal:25}}>Top Restaurants</Text>
                            <FlatList 
                            data={data}
                            renderItem={({item}) => {
                                return (
                                    <Resturant item={item} />
                                )
                            }}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            />
                        </>
                    )
                )
            )}
        </View>
    )
}

export default Restaurants

const styles = StyleSheet.create({
    container: {
        paddingVertical:10,
        marginBottom:615
    }
})