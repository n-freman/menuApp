import { StyleSheet } from "react-native";

import { scale, verticalScale } from '../../../sizeUtils';
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.black,
        height: 90,
    },
    title: {
        fontSize: scale(24),
        color: COLORS.white,
    }
})

export default styles;
