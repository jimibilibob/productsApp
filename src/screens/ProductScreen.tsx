import { StyleSheet, SafeAreaView, StatusBar, FlatList, ActivityIndicator } from 'react-native'
import React, { useContext, useState, useEffect } from 'react';

import CardProduct from '../components/CardProduct';
import CardCart from '../components/CardCart';
import { backgroundColor } from '../constants/styles';
import AppContext from '../../App.context';
import Product from '../models/Product';

const ProductScreen = () => {
  const appContext = useContext(AppContext)
  const [isLoading, setLoading] = useState(true);
  const [products, setData] = useState(Array<Product>);

  const getProducts = async () => {
     try {
      const response = await fetch('https://fakestoreapi.com/products').then( res => res.json() );
      setData(response as Array<Product>);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <CardCart></CardCart>
      {isLoading ? <ActivityIndicator/> 
        : (<FlatList
          data={products}
          style={styles.flatList}
          keyExtractor={({id}, index) => id.toString()}
          renderItem={(item) => (
            <CardProduct { ...{ product: item.item, onPress: appContext.addProduct} }/>
          )}
      />)}
    </SafeAreaView>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      paddingTop: 0,
      backgroundColor: backgroundColor
    },
    flatList: {
      flex: 1
    }
})