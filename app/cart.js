import { useState } from "react";
import {
    FlatList,
    SafeAreaView,
    View,
    StyleSheet,
    Text
} from "react-native";
import { useRecoilState } from 'recoil';

import Header from "../components/common/header/pageHeader";
import ClearButton from "../components/cart/clearButton";
import { scale, verticalScale } from "../sizeUtils";
import { COLORS } from '../constants';
import OrderLine from "../components/cart/orderLine";
import { cart } from "../globalCart";

const Cart = () => {
    const [order, setOrder] = useRecoilState(cart);

    const getItem(id) => {
        return data.
    }
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
