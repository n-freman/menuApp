import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import CategoryCard from '../card/categoryCard';
import styles from './categoryBlock.style';

const CategoryBlock = () => {
    const [categories, setCategories] = useState([
        {
            categoryId: 1,
            title: "Signature dishes",
            imageUrl: "#"
        },
        {
            categoryId: 2,
            title: "Drinks",
            imageUrl: "#"
        },
        {
            categoryId: 3,
            title: "Drinks",
            imageUrl: "#"
        },
        {
            categoryId: 4,
            title: "Drinks",
            imageUrl: "#"
        }
    ]);
    return (
        <View
            style={styles.categoryBlock}
        >
            <Text
                style={styles.categoryTitle}
            >
                Categories
            </Text>
            <FlatList
                data={categories}
                renderItem={({item}) => (
                    <CategoryCard
                        item={item}
                    />
                )}
                keyExtractor={item => item?.categoryId}
                contentContainerStyle={{columnGap: 24, marginVertical: 40}}
                horizontal
            />
        </View>
    );
}

export default CategoryBlock;