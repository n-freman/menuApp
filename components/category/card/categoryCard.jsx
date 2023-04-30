import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './categoryCard.style';

const CategoryCard = ({item}) => {
    return (
        <TouchableOpacity
            style={styles.categoryCard}
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
