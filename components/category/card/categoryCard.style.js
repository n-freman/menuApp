import { StyleSheet } from "react-native";

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
    categoryCard: {
        height: 270,
        width: 216,
        borderColor: COLORS.lightGreen,
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        paddingBottom: 43,
        alignContent: "center"
    },
    categoryImage: {
        width: 194,
        height: 178,
        borderRadius: 30,
        marginBottom: 10,
        backgroundColor: COLORS.lightGreen
    },
    categoryTitle: {
        fontFamily: "BarlowRegular",
        color: "#FCFFFC",
        fontSize: 18,
        lineHeight: 28.8
    }
})

export default styles;