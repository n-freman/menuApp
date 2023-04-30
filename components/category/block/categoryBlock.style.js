import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, fontScale } = Dimensions.get("window");

const styles = StyleSheet.create({
    categoryBlock: {
        marginLeft: 52,
        marginTop: 42,
    },
    categoryTitle: {
        fontFamily: "BarlowBold",
        fontSize: 40,
        lineHeight: 48,
        color: "#FFFFFF"
    }
})

export default styles;
