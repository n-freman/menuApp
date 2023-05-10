import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '../../../sizeUtils'
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
    passwordInputWrapper: {
        padding: scale(35),
        height: verticalScale(100),
        width: scale(695),
        backgroundColor: COLORS.darkGreen,
        borderRadius: scale(25),
        alignItems: "center"
    },
    passwordInput: {
        color: COLORS.white,
    },
    enterButton: {
        backgroundColor: COLORS.lightGreen,
        padding: scale(35),
        height: verticalScale(100),
        width: scale(695),
        marginTop: verticalScale(45),
        borderRadius: scale(25),
        alignItems: "center"
    },
    enterText: {
        color: COLORS.white
    }
})

export default styles;
