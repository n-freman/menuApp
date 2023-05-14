import { TouchableOpacity, Text, Image } from "react-native";

import { getObjectTranslation as oT } from "../../../langUtils";
import styles from "./recommendedCard.style";

const RecommendedCard = ({ item, onClick }) => {
    return (
        <TouchableOpacity
            style={styles.recommendedCard}
            onPress={onClick}
        >
            <Image
                style={styles.recommendedImage}
                source={{uri: item.image}}
            />
            <Text
                style={styles.recommendedText}
            >
                {oT(item)}
            </Text>
            <Text
                style={styles.recommendedText}
            >
                {item.price} TMT
            </Text>
        </TouchableOpacity>
    );
}

export default RecommendedCard;
