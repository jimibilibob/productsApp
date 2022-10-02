import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { textColor } from '../constants/styles';
import AppContext from '../../App.context';

const CardCart = () => {
const value = useContext(AppContext);
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>{value.quantity} Item(s) in cart</Text>
      <Text style={ styles.text }>{value.total} USD</Text>
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