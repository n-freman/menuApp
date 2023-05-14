import { useState, useEffect } from 'react';
import {
    Alert,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { useRecoilState } from 'recoil';

import { cart as cartAtom } from '../../../globalCart';
import { images } from '../../../constants';
import styles from './style';

const OrderLine = ({ item, amount }) => {
    const [itemAmount, setItemAmount] = useState(amount);
    const [cart, setCart] = useRecoilState(cartAtom)

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
        console.log(currentItem)
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
        console.log(sign == '+')
        console.log('Before: ', itemAmount)
        if (sign == '+') {
            setItemAmount(
                itemAmount + 1,
            )
        } else {
            setItemAmount(
                itemAmount - 1,
            )
        }
        updateCart({item: item.id, amount: itemAmount})
    }
    return (
        <View
            style={styles.orderBlock}
        >
            <Image
                style={styles.orderImage}
                source={images.muffin}
            />
            <View
                style={styles.orderMiddle}
            >
                <Text
                    style={styles.orderText}
                >
                    {item.title}
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
                        {itemAmount}
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
