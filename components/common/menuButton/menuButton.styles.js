import { StyleSheet } from "react-native";

import { scale, verticalScale } from '../../../sizeUtils';
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    menuButtonImage: {
        width: scale(25),
        height: scale(25),
    }, 
    menuButton: {
        width: scale(60),
        height: verticalScale(60),
        backgroundColor: COLORS.darkGreen,
        color: "#FFFFFF",
        fontSize: 500,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: scale(15),
        marginTop: verticalScale(31),
        marginLeft: scale(32),
        marginRight: scale(28),
      },
})

export default styles;