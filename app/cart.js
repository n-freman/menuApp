import { useState, useEffect } from "react";
import {
    FlatList,
    SafeAreaView,
    View,
    StyleSheet,
    Text
} from "react-native";
import { useRecoilState, useRecoilValue } from 'recoil';

import Header from "../components/common/header/pageHeader";
import { getTextTranslation as tT} from '../langUtils';
import ClearButton from "../components/cart/clearButton";
import { scale, verticalScale } from "../sizeUtils";
import { COLORS } from '../constants';
import OrderLine from "../components/cart/orderLine";
import { cart as cartAtom } from "../globalCart";
import { data as dataAtom } from "../fetchUtils";

const Cart = () => {
    const [cart, setCart] = useRecoilState(cartAtom);
    const order = [];
    const [orderState, setOrderState] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const data = useRecoilValue(dataAtom);
    const dishes = [];
    for (category of data) {
        for (dish of category.dishes) {
            dishes.push(dish);
        }
    }

    const getTotalPrice = () => {
        let price = 0;
        for (item of order) {
            price += item.amount * item.price;
        }
        return price + price * 0.10;
    }

    const getItem = (id) => {
        return dishes.find((item) => item.id === id)
    }
    useEffect(() => {
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
    }, [cart])

    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
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
                />
                <Text
                    style={styles.totalPrice}
                >
                    {tT("Total")}: {totalPrice} TMT
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: scale(52)
    },
    orderList: {
        marginTop: verticalScale(36),
        height: verticalScale(910)
    },
    totalPrice: {
        fontFamily: "BarlowRegular",
        fontSize: scale(36),
        color: COLORS.grayedWhite,
        lineHeight: scale(43.2),
        marginTop: scale(30)
    }
})

export default Cart;
