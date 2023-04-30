import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '../../../sizeUtils';

const styles = StyleSheet.create({
    recommendedBlock: {
        marginHorizontal: scale(52),
        marginTop: verticalScale(42),
        alignContent: "center",        
    },
    recommendedTitle: {
        fontFamily: "BarlowBold",
        fontSize: scale(40),
        lineHeight: verticalScale(48),
        color: "#FFFFFF"
    }
})

export default styles;
