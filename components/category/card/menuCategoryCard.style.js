import { StyleSheet } from "react-native";

import { scale, verticalScale } from '../../../sizeUtils';
import { COLORS } from "../../../constants";


const styles = StyleSheet.create({
    card: {
        width: scale(324),
        height: scale(400),
        borderColor: COLORS.lightGreen,
        borderWidth: scale(1),
        borderRadius: scale(35),
        paddingTop: scale(21),
        paddingHorizontal: scale(14),
        marginBottom: scale(52),
        alignItems: "center"
    },
    cardImage: {
        width: scale(294),
        height: scale(294),
        backgroundColor: COLORS.darkGreen,
        borderRadius: scale(35),
        marginBottom: verticalScale(35),
        resizeMode: "cover",
    },
    cardTitle: {
        color: COLORS.white,
        fontSize: scale(24),
        lineHeight: scale(28.8)
    }
})

export default styles;
