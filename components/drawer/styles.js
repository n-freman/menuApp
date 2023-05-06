import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";
import { scale, verticalScale } from "../../sizeUtils";

const styles = StyleSheet.create({
    drawerContainer: {
        backgroundColor: COLORS.black,
        paddingLeft: scale(32),
    },
    drawerTitle: {
        color: COLORS.white,
        fontSize: scale(72),
        fontFamily: "BarlowBold"
    },
    drawerItem: {
        color: COLORS.white,
        fontSize: scale(32),
        fontFamily: "BarlowRegular",
    }
});

export default styles;