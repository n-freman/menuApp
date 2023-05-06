import { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { useRouter } from "expo-router";

import { images } from "../../../constants";
import styles from "./styles";


const CartButton = () => {
    const router = useRouter();
    return (
        <TouchableOpacity
            style={styles.cartButton}
            onPress={() => {router.push('/cart/')}}
        >
            <Image
                source={ images.cart }
            />
        </TouchableOpacity>
    );
}

const LanguageButton = () => {
    const availableLanguages = ['EN', 'RU', 'TM'];
    const [language, setLanguage] = useState(0);
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
                {availableLanguages[language]}
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
