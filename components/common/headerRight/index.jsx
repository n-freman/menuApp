import { View, TouchableOpacity, Image, Text } from "react-native";
import { useRecoilState } from 'recoil';
import { useRouter } from "expo-router";

import { images } from "../../../constants";
import styles from "./styles";
import { 
    currentLanguage,
    LANGUAGES
} from "../../../langUtils";
import { getTextTranslation as tT } from "../../../langUtils";

const CartButton = () => {
    const router = useRouter();
    return (
        <TouchableOpacity
            style={styles.cartButton}
            onPress={() => {router.push('/cart/')}}
        >
            <Text
                style={styles.cartText}
            >
                {tT('My\nOrder')}
            </Text>
        </TouchableOpacity>
    );
}

const LanguageButton = () => {
    const [language, setLanguage] = useRecoilState(currentLanguage);
    const switchLang = () => {
        const newLang = language != 2 ? language + 1 : 0
        setLanguage(newLang)
    }
    return (
        <TouchableOpacity
            style={styles.languageButton}
            onPress={switchLang}
        >
            <Image
                source={images.globe}
                style={styles.languageImage}
            />
            <Text
                style={styles.languageText}
            >
                {LANGUAGES[language]}
            </Text>
        </TouchableOpacity>
    );
}

const HeaderRight = () => {
    return (
        <View
            style={styles.headerRight}
        >
            <LanguageButton />
            <CartButton />
        </View>
    )
}

export default HeaderRight;
