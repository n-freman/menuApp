import {
    SafeAreaView,
    StatusBar,
    ImageBackground,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import { COLORS, images } from '../constants';
import Header from "../components/common/header/pageHeader";
import { getTextTranslation as tT} from '../langUtils';
import { scale } from '../sizeUtils';

const AboutUs = () => {
    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <ImageBackground
                source={images.background}
                style={{height: 825}}
                resizeMode='stretch'
            >
                <StatusBar hidden />
                <Header title={tT("About Us")} />
                <View
                    style={styles.aboutUsWrapper}
                >
                    <Image
                        source={images.qr}
                        style={{height: 200, width: 200, marginBottom: 100}}
                    />
                    <Text
                        style={styles.titleText}
                    >
                        Crystal Resto Club © - All Rights Reserved {new Date().getFullYear()}
                    </Text>
                    <View
                        style={{
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: scale(1),
                            marginVertical: scale(40),
                            height: scale(5),
                            width: scale(700)
                        }}
                    ></View>
                    <Text
                        style={styles.developerText}
                    >
                        Developed By NeSL Engineering
                    </Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    aboutUsWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontFamily: "BarlowRegular",
        fontSize: scale(30),
        color: COLORS.white,
    },
    developerText: {
        fontFamily: "BarlowRegular",
        fontSize: scale(18),
        color: COLORS.white,
    }
})

export default AboutUs;
