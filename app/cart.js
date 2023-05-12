import { useState } from "react";
import {
    FlatList,
    SafeAreaView,
    View,
    StyleSheet,
    Text
} from "react-native";

import Header from "../components/common/header/pageHeader";
import ClearButton from "../components/cart/clearButton";
import { scale, verticalScale } from "../sizeUtils";
import { COLORS } from '../constants';
import OrderLine from "../components/cart/orderLine";

const Cart = () => {
    const [order, setOrder] = useState([
        {
            id: 1,
            title: "Lasagna with bolognese sauce",
            price: 70,
            imageUrl: "#",
            ingredients: [
                {
                    title: 'Chopped meat',
                    amount: '10 gr'
                },
                {
                    title: 'Bolognese sauce',
                    amount: '20 gr'
                },
                {
                    title: 'Lasagna Sheets',
                    amount: '15 gr'
                },
                {
                    title: 'Chesee',
                    amount: '10 gr'
                }
            ]
        },
        {
            id: 2,
            title: "Lasagna with bolognese sauce",
            price: 70,
            imageUrl: "#",
            ingredients: [
                {
                    title: 'Chopped meat',
                    amount: '10 gr'
                },
                {
                    title: 'Bolognese sauce',
                    amount: '20 gr'
                },
            ]
        },
        {
            id: 3,
            title: "Lasagna with bolognese sauce",
            price: 70,
            imageUrl: "#",
            ingredients: [
                {
                    title: 'Chopped meat',
                    amount: '10 gr'
                },
                {
                    title: 'Bolognese sauce',
                    amount: '20 gr'
                },
            ]
        },
        {
            id: 4,
            title: "Tomato Sauce",
            price: 70,
            imageUrl: "#",
            ingredients: [
                {
                    title: 'Chopped meat',
                    amount: '10 gr'
                },
                {
                    title: 'Bolognese sauce',
                    amount: '20 gr'
                },
            ]
        },
    ]);
    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <Header title="Order" />
            <View
                style={styles.container}
            >
                <ClearButton />
                <FlatList
                    style={styles.orderList}
                    data={order}
                    renderItem={({ item }) => (
                        <OrderLine item={item} />
                    )}
                    keyExtractor={item => item?.id}
                />
                <Text
                    style={styles.totalPrice}
                >
                    Total: 70 TMT
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
