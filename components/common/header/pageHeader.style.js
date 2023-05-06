import { StyleSheet } from "react-native";

import { scale, verticalScale } from '../../../sizeUtils';
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#040F0F",
    },
    backButtonImage: {
        width: scale(26),
        height: verticalScale(19),
    }, 
    backButton: {
        width: scale(60),
        height: verticalScale(60),
        fontSize: 500,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#FCFFFC",
        borderRadius: scale(15),
        marginVertical: verticalScale(31),
        marginRight: scale(68),
    },
    topTitle: {
        fontFamily: 'BarlowBold',
        fontSize: scale(40),
        lineHeight: verticalScale(48),
        color: "#FCFFFC",
        marginLeft: scale(32),
    }
})

export default styles;