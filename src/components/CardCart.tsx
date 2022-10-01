import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textColor, backgroundColor } from '../constants/styles';

const CardCart = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>4 Item(s) in cart</Text>
      <Text style={ styles.text }>USD 1020</Text>
    </View>
  )
}

export default CardCart

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#FFF'
    },
    text: {
        color: textColor,
        textAlign: 'center',
        fontSize: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})