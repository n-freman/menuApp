import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRecoilValue } from 'recoil';
import { useRouter } from "expo-router";

import { scale, verticalScale } from '../../../sizeUtils';
import { data as dataAtom } from '../../../fetchUtils';
import CategoryCard from '../card/categoryCard';
import styles from './categoryBlock.style';

const CategoryBlock = () => {
    const categories = useRecoilValue(dataAtom);
    
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