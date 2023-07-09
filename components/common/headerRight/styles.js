import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";
import { scale, verticalScale } from "../../../sizeUtils";

const styles = StyleSheet.create({
    headerRight: {
        display: "flex",
        flexDirection: "row",
        gap: scale(30),
        marginRight: scale(62),
        alignItems: "center",
    },
    languageButton: {
        display: "flex",
        flexDirection: "row",
        gap: scale(10),
        paddingVertical: verticalScale(19),
        paddingHorizontal: scale(23),
        backgroundColor: COLORS.darkGreen,
        borderRadius: scale(15),
        alignItems: "center",
        textAlign: "center"
    },
    languageImage: {
        marginRight: scale(15)
    },
    languageText: {
        fontFamily: "BarlowBold",
        fontSize: scale(24),
        lineHeight: scale(30),
        color: COLORS.white,
    },
    cartButton: {
        borderRadius: scale(15),
        backgroundColor: COLORS.darkGreen,
        padding: scale(14),
        paddingVertical: verticalScale(10),
    },
    cartText: {
        fontFamily: "BarlowBold",
        color: COLORS.white,
        fontSize: scale(18),
        lineHeight: scale(25),
        textAlign: "center",
        maxWidth: scale(80)
    }
})

export default styles;
