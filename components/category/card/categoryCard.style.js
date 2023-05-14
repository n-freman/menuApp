import { StyleSheet } from "react-native";

import { scale, verticalScale } from '../../../sizeUtils';
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
    categoryCard: {
        height: verticalScale(270),
        width: scale(216),
        borderColor: COLORS.lightGreen,
        borderWidth: scale(1),
        borderRadius: scale(30),
        padding: scale(10),
        paddingBottom: verticalScale(43),
        alignContent: "center"
    },
    categoryImage: {
        width: scale(195),
        height: verticalScale(178),
        borderRadius: scale(30),
        marginBottom: scale(10),
        backgroundColor: COLORS.darkGreen,
        resizeMode: "contain"
    },
    categoryTitle: {
        fontFamily: "BarlowRegular",
        color: "#FCFFFC",
        fontSize: scale(24),
        lineHeight: scale(28.8)
    }
})

export default styles;