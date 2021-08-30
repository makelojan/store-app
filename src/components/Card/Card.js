import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import styles from './Card.style';

const Card = ({product}) => {
    return(
        <View style={[styles.container, product.id % 2 == 0 ? {margin: 5, marginLeft: 0} : {margin: 5, marginRight: 0}]}>
            <View style={styles.image}>
                <Image 
                    source={{uri: product.imgURL}}
                    style={{height: Dimensions.get('window').height / 3}}
                    resizeMethod="scale"
                    resizeMode="contain"
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                {product.inStock ? null : <Text style={styles.condition}>OUT OF STOCK</Text>}
            </View>
        </View>
    );
};

export default Card;