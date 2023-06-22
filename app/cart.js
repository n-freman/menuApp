import { useState, useEffect } from "react";
import {
    FlatList,
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    ImageBackground
} from "react-native";
import { useRecoilState, useRecoilValue } from 'recoil';

import Header from "../components/common/header/pageHeader";
import { getTextTranslation as tT} from '../langUtils';
import ClearButton from "../components/cart/clearButton";
import { scale, verticalScale } from "../sizeUtils";
import { COLORS, images } from '../constants';
import OrderLine from "../components/cart/orderLine";
import { cart as cartAtom } from "../globalCart";
import { data as dataAtom } from "../fetchUtils";
import { discount as discountAtom } from "../discountUtils";

const Cart = () => {
    const discountText = tT("Discount");
    const [cart, setCart] = useRecoilState(cartAtom);
    const order = [];
    const [orderState, setOrderState] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const discount = useRecoilValue(discountAtom);
    const data = useRecoilValue(dataAtom);
    const dishes = [];

    const getPrice = () => {
        let price = 0;
        for (item of orderState) {
            price += item.amount * item.price;
        }
        return price;
    }

    const getTotalPrice = () => {
        let price = getPrice();
        // apply service percents
        price += price * 0.15;
        // apply discount
        price -= price * discount / 100;
        return price;
    }

    const getItem = (id) => {
        return dishes.find((item) => item.id === id)
    }
    useEffect(() => {
        for (category of data) {
            for (dish of category.dishes) {
                dishes.push(dish);
            }
        }
        for (item of cart) {
            order.push(
                {
                    ...getItem(item.item),
                    amount: item.amount
                }
            )
        }
        order.sort((item1, item2) => item1.id - item2.id)
        setOrderState(order);
        setTotalPrice(getTotalPrice());
    }, [cart, discount])

    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <ImageBackground
                source={images.background}
                style={{height: scale(1220)}}
                resizeMode='stretch'
            >
                <Header title={tT("Order")} />
                <View
                    style={styles.container}
                >
                    <ClearButton />
                    <FlatList
                        style={styles.orderList}
                        data={orderState}
                        
                        renderItem={({item, key}) => {
                            return <OrderLine item={item} amount={item.amount} />
                        }}
                        keyExtractor={item => item?.id}
                        showsVerticalScrollIndicator={false}
                    />
                    <Text
                        style={styles.price}
                    >
                        {tT("Price")}: {getPrice()} TMT
                    </Text>
                    <Text
                        style={styles.price}
                    >
                        {tT("Service")}: 15% ({getPrice() * 0.15} TMT)
                    </Text>
                    { parseInt(discount) !== 0 &&
                    <Text
                        style={styles.price}
                    >
                        {discountText}: {discount}% ({getPrice() * discount / 100} TMT)
                    </Text>
                    }
                    <Text
                        style={styles.totalPrice}
                    >
                        {tT("Total")}: {totalPrice} TMT
                    </Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: scale(52)
    },
    orderList: {
        marginTop: verticalScale(36),
        height: verticalScale(850)
    },
    price: {
        fontFamily: "BarlowRegular",
        fontSize: scale(24),
        color: COLORS.grayedWhite,
        lineHeight: scale(30),
        marginTop: scale(5)
    },
    totalPrice: {
        fontFamily: "BarlowRegular",
        fontSize: scale(36),
        color: COLORS.grayedWhite,
        lineHeight: scale(43.2),
        marginTop: verticalScale(15),
    }
})

export default Cart;
