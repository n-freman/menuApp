import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './categoryCard.style';

const CategoryCard = ({item, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => {onPress(item.categoryId)}}
        >
            <Image
                source={item.imageUrl}
                style={styles.categoryImage}
            />
            <Text
                style={styles.categoryTitle}
            >
                {item.title}
            </Text>
        </TouchableOpacity>
    );
}

export default CategoryCard;
