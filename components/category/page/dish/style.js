import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../../../sizeUtils';
import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
    dishWrapper: {
        width: "50%",
        maxWidth: scale(324),
        height: verticalScale(458),
        padding: scale(15),
        borderWidth: scale(1),
        borderColor: COLORS.lightGreen,
        borderRadius: scale(50),
        marginRight: scale(50),
    },
    dishImage: {
        backgroundColor: COLORS.darkGreen,
        width: scale(294),
        height: scale(294),
        borderRadius: scale(35),
        resizeMode: "contain"
    },
    dishText: {
        fontFamily: "BarlowRegular",
        color: COLORS.white,
        fontSize: scale(24),
        marginTop: scale(10),
        lineHeight: scale(29),
    },
})

export default styles;
