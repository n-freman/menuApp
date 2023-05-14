import {
    SafeAreaView,
    View,
    StyleSheet,
    TextInput
} from "react-native";

import Header from "../../components/common/header/pageHeader";
import { getTextTranslation as tT } from "../../langUtils";
import PasswordInput from "../../components/discounts/auth";
import { COLORS } from "../../constants";
import { verticalScale } from "../../sizeUtils";

const DiscountAuthPage = () => {
    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <Header title={tT("Discounts")} />
            <View
                style={styles.container}
            >
                <PasswordInput />
            </View>
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
