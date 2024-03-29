import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from "react-native";
import { useRouter } from 'expo-router'
import { useRecoilValue, useRecoilState } from 'recoil';

import { COLORS, images } from '../../constants';
import { discount as discountAtom } from "../../discountUtils";
import { cart as cartAtom } from "../../globalCart";
import { data as dataAtom } from "../../fetchUtils"
import { getTextTranslation as tT } from '../../langUtils';
import Header from '../../components/common/header/pageHeader';
import { verticalScale, scale } from "../../sizeUtils";
import { useState } from "react";

const DiscountPage = () => {
    const router = useRouter();
    const cart = useRecoilValue(cartAtom);
    const [discount, setDiscount] = useRecoilState(discountAtom);
    const [currentDiscount, setCurDiscount] = useState(discount);
    let order = [];
    const data = useRecoilValue(dataAtom);
    const dishes = [];
    for (category of data) {
        for (dish of category.dishes) {
            dishes.push(dish);
        }
    }
    const getItem = (id) => {
        return dishes.find((item) => item.id === id)
    }
    for (item of cart) {
        order.push(
            {
                ...getItem(item.item),
                amount: item.amount
            }
        )
    }

    const getTotalPrice = () => {
        let price = 0;
        for (item of order) {
            price += item.amount * item.price;
        }
        return price;
    }

    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <ImageBackground
                source={images.background}
                style={{height: scale(1220)}}
                resizeMode='stretch'
            >
                <Header title={tT("Select discount amount")} />
                <View
                    style={styles.container}
                >
                    <Text
                        style={styles.text}
                    >
                        {tT('Total')}: {getTotalPrice()} TMT
                    </Text>
                    <TouchableOpacity
                        style={styles.amountWrapper}
                    >
                        <TextInput
                            placeholder={tT("Enter Discount Amount")}
                            keyboardType="numeric"
                            style={styles.amountInput}
                            onChangeText={(value) => {
                                setCurDiscount(parseInt(value))
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => {setDiscount(currentDiscount); router.push('/')}}
                    >
                        <Text
                            style={styles.submitText}
                        >
                            OK
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: verticalScale(53),
        paddingTop: scale(60)
    },
    text: {
        fontFamily: "BarlowRegular",
        fontSize: scale(36),
        lineHeight: scale(43.2),
        color: COLORS.white,
        marginBottom: verticalScale(45)
    },
    amountWrapper: {
        width: "100%",
        height: verticalScale(100),
        marginTop: verticalScale(294),
        backgroundColor: COLORS.darkGreen,
        borderRadius: scale(20),
        alignItems: "center",
        justifyContent: "center"
    },
    amountInput: {
        color: COLORS.white,
        alignContent: "center",
        textAlign: "center"
    },
    submitButton: {
        backgroundColor: COLORS.darkGreen,
        borderRadius: scale(20),
        width: scale(100),
        height: verticalScale(66),
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(500),
        marginHorizontal: "42.5%"
    },
    submitText: {
        color: COLORS.white,
        fontFamily: "BarlowRegular",
        fontSize: scale(35),
        lineHeight: scale(40),
    }
})

export default DiscountPage;
