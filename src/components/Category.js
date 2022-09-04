import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import CategoryItem from './CategoryItem';

const Category = ({term, setTerm}) => {
    const [items, setItems] = useState([
        {id:1, name:"Burger", imgUrl:require("../../assets/images/burger.png")},
        {id:2, name:"Cake", imgUrl:require("../../assets/images/cake.png")},
        {id:3, name:"Pasta", imgUrl:require("../../assets/images/pasta.png")},
        {id:4, name:"Pizza", imgUrl:require("../../assets/images/pizza.png")},
        {id:5, name:"Drink", imgUrl:require("../../assets/images/smoothies.png")},
        {id:6, name:"Steak", imgUrl:require("../../assets/images/steak.png")},
    ])
    return (
        <View style={styles.container}>
            <FlatList
            data={items}
            renderItem={({item}) => {
                return (
                    <CategoryItem item={item} onSelect={setTerm} active={item.name === term}/>
                )
            }}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
    }
})