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
    const [cart, setCart] = useRecoilState(cartAtom);
    const order = [];
    const [orderState, setOrderState] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const discount = useRecoilValue(discountAtom);
    const data = useRecoilValue(dataAtom);
    const dishes = [];

    const getTotalPrice = () => {
        let price = 0;
        for (item of order) {
            price += item.amount * item.price;
        }
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
                style={{height: 825}}
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
                        style={styles.totalPrice}
                    >
                        {tT("Service")}: 15%
                    </Text>
                    <Text
                        style={styles.totalPrice}
                    >
                        {tT("Discount")}: {discount}%
                    </Text>
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
    totalPrice: {
        fontFamily: "BarlowRegular",
        fontSize: scale(36),
        color: COLORS.grayedWhite,
        lineHeight: scale(43.2),
        marginTop: scale(15)
    }
})

export default Cart;
