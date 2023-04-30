import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    menuButtonImage: {
        width: 25,
        height: 25,
    }, 
    menuButton: {
        width: 60,
        height: 60,
        backgroundColor: COLORS.darkGreen,
        color: "#FFFFFF",
        fontSize: 500,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginTop: 31,
        marginLeft: 32,
        marginRight: 28,
      },
})

export default styles;