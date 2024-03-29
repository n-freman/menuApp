import { useState, useEffect } from 'react';
import {
    Alert,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { useRecoilState } from 'recoil';

import { getObjectTranslation as oT } from '../../../langUtils';
import { cart as cartAtom } from '../../../globalCart';
import { images } from '../../../constants';
import styles from './style';

const OrderLine = ({ item, amount }) => {
    const [cart, setCart] = useRecoilState(cartAtom)
    let curAmount = amount;

    const removeFromCart = () => {
        const oldCart = [...cart];
        const realItem = item;
        let currentItem = oldCart.find(({ item }) => item === realItem.id )
        oldCart.splice(oldCart.indexOf(currentItem), 1)
        setCart([
            ...oldCart
        ])
    }

    const updateCart = ({ item, amount }) => {
        if (amount <= 0) {
            Alert.alert("Amount must be bigger than zero")
            return 0;
        }
        const curr = item
        const oldCart = [...cart];
        let currentItem = oldCart.find(({item}) => item == curr);
        if (currentItem) {
            oldCart.splice(oldCart.indexOf(currentItem), 1)
        }
        currentItem = {
            item,
            amount
        }
        setCart([
            ...oldCart,
            currentItem
        ])
    }
    
    const updateAmount = (sign) => {
        if (sign == '+') {
            curAmount += 1
        } else {
            curAmount -= 1
        }
        updateCart({item: item.id, amount: curAmount})
    }
    return (
        <View
            style={styles.orderBlock}
        >
            <Image
                style={styles.orderImage}
                source={{uri: item.image}}
            />
            <View
                style={styles.orderMiddle}
            >
                <Text
                    style={styles.orderText}
                >
                    {oT(item)}
                </Text>
                <View
                    style={styles.amountButtons}
                >
                    <TouchableOpacity
                        style={styles.changeAmountButton}
                        onPress={() => updateAmount('-')}
                    >
                        <Image
                            source={images.minus}
                        />
                    </TouchableOpacity>
                    <Text
                        style={styles.amountText}
                    >
                        {amount}
                    </Text>
                    <TouchableOpacity
                        style={styles.changeAmountButton}
                        onPress={() => updateAmount('+')}
                    >
                        <Image
                            source={images.plus}
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    style={styles.orderText}
                >
                    {item.price} TMT
                </Text>
            </View>
            <TouchableOpacity
                style={styles.removeImageBlock}
                onPress={removeFromCart}
            >
                <Image
                    style={styles.removeImage}
                    source={images.plus}
                />
            </TouchableOpacity>
        </View>
    )
}

export default OrderLine;
