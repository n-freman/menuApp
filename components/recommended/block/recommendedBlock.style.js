import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '../../../sizeUtils';
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
    recommendedBlock: {
        marginHorizontal: scale(52),
        marginTop: verticalScale(42),
        alignContent: "center", 
        flex: 1,       
    },
    recommendedTitle: {
        fontFamily: "BarlowBold",
        fontSize: scale(40),
        lineHeight: verticalScale(48),
        color: COLORS.white,
        marginBottom: verticalScale(15)
    },

})

export default styles;
