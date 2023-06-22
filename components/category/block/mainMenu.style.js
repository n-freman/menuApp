import { StyleSheet } from "react-native";

import { scale, verticalScale } from "../../../sizeUtils";


const styles = StyleSheet.create({
    menuBlock: {
        marginLeft: scale(52),
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        flex: 1,
        maxWidth: scale(800-104),
        marginBottom: verticalScale(50)
    },
    menuTitle: {
        marginLeft: scale(52),
        marginBottom: scale(52),
        fontFamily: "BarlowBold",
        fontSize: scale(40),
        lineHeight: verticalScale(48),
        color: "#FFFFFF",
        textTransform: "uppercase",
    }
});

export default styles;
