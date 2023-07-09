import { StyleSheet } from "react-native";

import { scale, verticalScale } from '../../../sizeUtils';
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
    bottomSheet: {
        backgroundColor: COLORS.darkGreen,
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
        height: verticalScale(100)
    },
    bottomSheetHandler: {
        backgroundColor: COLORS.black,
        alignItems: "center",
        paddingVertical: verticalScale(15),
        borderWidth: 0.8,
        borderColor: COLORS.darkGreen,
        borderTopLeftRadius: scale(15),
        borderTopRightRadius: scale(15)
    },
    bottomSheetHandlerText: {
        color: COLORS.white,
        fontSize: scale(24),
        textTransform: "uppercase"
    },
    ingredientList: {
        marginTop: verticalScale(20),
    },
    ingredient: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: scale(33.5),
        marginTop: verticalScale(70),
        marginBottom: 0,
        height: verticalScale(100),
    },
    ingredientText: {
        color: COLORS.white,
        fontFamily: "BarlowRegular",
        fontSize: scale(24),
        lineHeight: scale(28.8)
    },
    ingredientBottomLine: {
        height: verticalScale(1.7),
        width: scale(720),
        backgroundColor: COLORS.white
    },
    addToCartBlock: {
        backgroundColor: COLORS.black,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: scale(100),
        marginHorizontal: scale(35),
        marginVertical: verticalScale(70),
        paddingHorizontal: scale(100),
        paddingVertical: verticalScale(29.5),
        alignItems: "center",
        borderRadius: scale(25),
        height: verticalScale(109)
    },
    ingredientPrice: {
        width: scale(170),
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
        justifyContent: "center",
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
