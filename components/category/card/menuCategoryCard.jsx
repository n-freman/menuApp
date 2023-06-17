import { View, Text, Image, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";

import styles from "./menuCategoryCard.style";
import { getObjectTranslation as oT } from "../../../langUtils";


const MenuCategoryCard = ({ item }) => {
    const router = useRouter();
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => {router.push(`/categories/${item.id}`)}}
        >
            <Image
                source={{uri: item.image}}
                style={styles.cardImage}
            />
            <Text
                style={styles.cardTitle}
            >
                {oT(item)}
            </Text>
        </TouchableOpacity>
    )
}

export default MenuCategoryCard;
