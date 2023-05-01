import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRouter } from "expo-router";

import { scale, verticalScale } from '../../../sizeUtils';
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
    
    const router = useRouter();

    const redirectToCategory = (id) => {
        router.push(`/categories/${id}`)
    }

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
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({item}) => (
                    <CategoryCard
                        item={item}
                        onPress={redirectToCategory}
                    />
                )}
                keyExtractor={item => item?.categoryId}
                contentContainerStyle={{columnGap: scale(24), marginVertical: verticalScale(50)}}
                horizontal
            />
        </View>
    );
}

export default CategoryBlock;