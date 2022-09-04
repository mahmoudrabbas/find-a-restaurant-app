import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { elevation } from './../common/styles';

const CategoryItem = ({item, active, onSelect}) => {
    return (
        <Pressable onPress={() => onSelect(item.name)} style={[styles.container, item.id===1? {marginLeft:25} : {margin:10}, active?{backgroundColor:"red"}:{backgroundColor:"white"} ]}>
            <View style={styles.imgContainer}>
                <Image source={item.imgUrl} style={{width:25, height:25}} />
            </View>
            <Text style={active?{color:"white"}:{color:"#333"}}>{item.name}</Text>
        </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        marginRight:10,
        marginVertical:10,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        backgroundColor:"white",
        borderRadius:20,
        ...elevation,
        paddingVertical:10
    },
    imgContainer:{
        backgroundColor:"white",
        padding:10,
        borderRadius:50,
    }
})