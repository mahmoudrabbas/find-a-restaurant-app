import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head1}>Grab your</Text>
            <Text style={styles.head2}>delicious meal!</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop:60,
        marginHorizontal:30
    },
    head1: {
        fontSize:25,
    },
    head2: {
        fontSize:25,
        fontWeight:"bold",
    }
})