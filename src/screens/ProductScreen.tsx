import { StyleSheet,  View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useContext } from 'react';

import CardProduct from '../components/CardProduct';
import CardCart from '../components/CardCart';
import { backgroundColor } from '../constants/styles';
import AppContext from '../../App.context';

const ProductScreen = () => {
  const appContext = useContext(AppContext)

  return (
    <SafeAreaView style={styles.safeArea}>
      <CardCart></CardCart>
      <ScrollView style={styles.scrollView}>
          <CardProduct { ...{onPress: appContext.addProduct} }/>
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