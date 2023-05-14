import { View, Text, TouchableOpacity, Image } from 'react-native';

import { getObjectTranslation as oT } from '../../../langUtils';
import styles from './categoryCard.style';

const CategoryCard = ({item, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => {onPress(item.categoryId)}}
        >
            <Image
                source={{uri: item.image}}
                style={styles.categoryImage}
            />
            <Text
                style={styles.categoryTitle}
            >
                {oT(item)}
            </Text>
        </TouchableOpacity>
    );
}

export default CategoryCard;
