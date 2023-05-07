import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";
import { scale } from "../../../sizeUtils";

const styles = StyleSheet.create({
    orderBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: scale(35)
    },
    orderImage: {
        borderRadius: scale(55),
        width: scale(294),
        height: scale(294)
    },
    orderText: {
        fontFamily: "BarlowRegular",
        fontSize: scale(36),
        lineHeight: scale(43),
        color: COLORS.grayedWhite,
        width: scale(294)
    },
    orderMiddle: {
        justifyContent: "space-between",
        alignItems: "flex-start",
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
    removeImageBlock: {
        width: scale(60),
        height: scale(60),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: scale(1),
        borderColor: COLORS.grayedWhite,
        borderRadius: scale(17)
    },
    removeImage: {
        transform: [{rotate: "45deg"}],
    }
})

export default styles;
