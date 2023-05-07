import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';
import { scale } from '../../../sizeUtils';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: scale(52)
    },
    clear: {
        flexDirection: "row",
        gap: scale(39),
        alignItems: "center"
    },
    clearText: {
        color: COLORS.grayedWhite,
        fontFamily: "BarlowRegular",
        fontSize: scale(36),
        lineHeight: scale(43.2),
    },
    clearImage: {
        padding: scale(17.5),
        borderWidth: scale(1),
        borderColor: COLORS.grayedWhite,
        borderRadius: scale(25),
    }
})

export default styles;
