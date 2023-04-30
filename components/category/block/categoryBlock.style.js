import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

import { scale, verticalScale } from '../../../sizeUtils';

const styles = StyleSheet.create({
    categoryBlock: {
        marginLeft: scale(52),
        marginTop: verticalScale(42),
    },
    categoryTitle: {
        fontFamily: "BarlowBold",
        fontSize: scale(40),
        lineHeight: verticalScale(48),
        color: "#FFFFFF"
    }
})

export default styles;
