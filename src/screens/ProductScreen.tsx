import { StyleSheet,  View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import CardProduct from '../components/CardProduct';
import { backgroundColor } from '../constants/styles';

const ProductScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style= {{ flex: 1, width: "100%", backgroundColor: backgroundColor }}>
            <CardProduct/>
        </View>
    </SafeAreaView>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    safeArea: {
        paddingTop: StatusBar.currentHeight,
    }
})