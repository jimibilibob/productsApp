import { StyleSheet,  View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react';

import CardProduct from '../components/CardProduct';
import CardCart from '../components/CardCart';
import { backgroundColor } from '../constants/styles';

const ProductScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CardCart></CardCart>
      <ScrollView style={styles.scrollView}>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: backgroundColor
    },
    scrollView: {
      flex: 1
    }
})