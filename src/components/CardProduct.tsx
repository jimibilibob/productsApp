import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { imageBackgroundColor, textColor, primaryColor } from '../constants/styles';
import Product from '../models/Product';

type CardProductProps = {
    onPress: (price: number) => void;
    product: Product
}

export default function CardProduct(props: CardProductProps) {
    const { onPress, product } = props

    const press = () => {
        onPress(Number(product.price))
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.imageBackground }>
                <Image source={{uri: product.image}} resizeMode={'contain'}  style={ styles.image }></Image>
            </View>
            <View style={ styles.productData }>
                <Text style={ styles.productNameText }>{ product.title }</Text>
                <Text style={ styles.productDataText }>USD { product.price }</Text>
            </View>
            <TouchableOpacity onPress={ press }>
                <View style={ styles.addButtonContainer }>
                    <FontAwesomeIcon icon={ faCartPlus } size={40} style={ styles.addButton }/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: imageBackgroundColor,
        borderRadius: 25,
        margin: 5
    },
    imageBackground: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 50,
        width: 50,
        marginVertical: 20,
    },
    productData: {
        flex: 5,
        alignContent: 'center',
        marginVertical: 20
    },
    productNameText: {
        flex: 1,
        color: textColor,
        fontWeight: 'bold',
        marginHorizontal: 12,
        fontSize: 20
    },
    productDataText: {
        flex: 1,
        color: 'white',
        marginHorizontal: 12,
        fontSize: 18
    },
    addButtonContainer: {
        flex: 1,
        marginVertical: 20,
        alignContent: 'center',
        justifyContent: 'center'
    },
    addButton: {
        flex: 1,
        color: primaryColor,
        marginRight: 20
    }
});
