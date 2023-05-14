import { StyleSheet } from "react-native";

import { scale, verticalScale } from '../../../sizeUtils';
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
    bottomSheet: {
        backgroundColor: COLORS.black,
        flex: 1,
        borderTopWidth: 0,
    },
    bottomSheetImage: {
        width: scale(800),
        height: verticalScale(500),
        backgroundColor: COLORS.darkGreen,
        resizeMode: "cover"
    },
    bottomSheetTitle: {
        maxWidth: scale(447),
        color: COLORS.white,
        marginLeft: scale(33.5),
        marginTop: scale(30),
        fontFamily: "BarlowBold",
        fontSize: scale(36),
    },
    bottomSheetHandler: {
        backgroundColor: COLORS.black,
        alignItems: "center",
        paddingVertical: verticalScale(15),
        backgroundColor:  COLORS.black,
        borderWidth: 0.8,
        borderColor: COLORS.black,
    },
    ingredientList: {
        marginTop: verticalScale(20)
    },
    ingredient: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: scale(33.5),
        marginVertical: verticalScale(5)
    },
    ingredientText: {
        color: COLORS.white,
        fontFamily: "BarlowRegular",
        fontSize: scale(24),
        lineHeight: scale(28.8)
    },
    addToCartBlock: {
        backgroundColor: COLORS.darkGreen,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: scale(100),
        marginHorizontal: scale(35),
        marginVertical: verticalScale(30),
        paddingHorizontal: scale(48),
        paddingVertical: verticalScale(29.5),
        alignItems: "center",
        borderRadius: scale(25),
        height: verticalScale(109)
    },
    ingredientPrice: {
        width: scale(123),
        fontFamily: "BarlowRegular",
        fontSize: scale(36),
        color: COLORS.grayedWhite,
        lineHeight: scale(43.2),
    },
    amountButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: scale(153),
    },
    amountText: {
        fontFamily: "BarlowRegular",
        fontSize: scale(36),
        color: COLORS.grayedWhite,
        lineHeight: scale(43.2),
    },
    changeAmountButton: {
        width: scale(40),
        height: scale(40),
        justifyContent: "center",
        alignItems: "center",
        borderWidth: scale(1.5),
        borderColor: COLORS.grayedWhite,
        borderRadius: scale(20)
    },
    changeAmountButtonImage: {
        width: scale(40),
        height: scale(40),
        verticalAlign: "center",
    },
    addButton: {
        width: scale(161),
        height: verticalScale(73),
        alignItems: "center",
        paddingHorizontal: scale(45),
        paddingVertical: verticalScale(15),
        backgroundColor: COLORS.grayedWhite,
        borderRadius: scale(25)
    },
    addButtonText: {
        fontFamily: "BarlowRegular",
        fontSize: scale(36),
        lineHeight: scale(43.2),
    }
});

export default styles;
