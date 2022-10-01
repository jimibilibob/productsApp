import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { imageBackgroundColor, textColor } from '../constants/styles';

export default function CardProduct() {
    return (
        <View style={ styles.container }>
            <View style={ styles.imageBackground }>
                <Image source={require("../../assets/favicon.png")} resizeMode={'contain'}  style={ styles.image }></Image>
            </View>
            <View style={ styles.productData }>
                <Text style={ styles.productDataText }>Gamer Chair</Text>
                <Text style={ styles.productDataText }>USD 330</Text>
            </View>
            <TouchableOpacity>
                <View style={ styles.addButtonContainer }>
                    <Text style={ styles.addButton }>Add</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        width: "100%",
        borderRadius: 25,
        margin: 5
    },
    imageBackground: {
        flex: 2,
        backgroundColor: imageBackgroundColor,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center'
    },
    image: {
        height: 50,
        width: 50,
        marginVertical: 20
    },
    productData: {
        flex: 5,
        alignContent: 'center',
        marginVertical: 20
    },
    productDataText: {
        flex: 1,
        color: textColor,
        marginHorizontal: 12,
        fontSize: 20
    },
    addButtonContainer: {
        flex: 1,
        marginVertical: 20,
        alignContent: 'center'
    },
    addButton: {
        flex: 1,
        fontSize: 23,
        textAlignVertical: 'center',
        fontWeight: 'bold',
        color: textColor,
        marginRight: 20
    }
});
