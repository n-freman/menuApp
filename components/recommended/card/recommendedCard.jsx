import { TouchableOpacity, Text, Image } from "react-native";

import styles from "./recommendedCard.style";

const RecommendedCard = ({ item, onClick }) => {
    return (
        <TouchableOpacity
            style={styles.recommendedCard}
            onPress={onClick}
        >
            <Image
                style={styles.recommendedImage}
                source={item.imageUrl}
            />
            <Text
                style={styles.recommendedText}
            >
                {item.title}
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
