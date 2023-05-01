import { StyleSheet } from "react-native";

import { scale, verticalScale } from '../../../sizeUtils';
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    recommendedCard: {
        color: "#FFF",
        height: verticalScale(443),
        width: scale(324),
        borderColor: COLORS.lightGreen,
        borderWidth: scale(1),
        borderRadius: scale(30),
        padding: scale(15)
    },
    recommendedImage: {
        height: verticalScale(294),
        width: scale(294),
        backgroundColor: COLORS.darkGreen,
        borderRadius: scale(35),
        marginBottom: scale(10)
    },
    recommendedText: {
        fontFamily: "BarlowRegular",
        color: "#FCFFFC",
        fontSize: scale(24),
        lineHeight: scale(28.8),
        maxWidth: scale(280)
    }
})

export default styles;
