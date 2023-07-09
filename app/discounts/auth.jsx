import {
    SafeAreaView,
    View,
    StyleSheet,
    ImageBackground
} from "react-native";

import Header from "../../components/common/header/pageHeader";
import { getTextTranslation as tT } from "../../langUtils";
import PasswordInput from "../../components/discounts/auth";
import { COLORS, images } from "../../constants";
import { scale, verticalScale } from "../../sizeUtils";

const DiscountAuthPage = () => {
    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <ImageBackground
                source={images.background}
                style={{height: scale(1220)}}
                resizeMode='stretch'
            >
                <Header title={tT("Discounts")} />
                <View
                    style={styles.container}
                >
                    <PasswordInput />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: verticalScale(300)
    }
})

export default DiscountAuthPage;
