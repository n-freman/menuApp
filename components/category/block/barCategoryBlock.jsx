import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRecoilValue } from 'recoil';
import { useRouter } from "expo-router";

import { scale, verticalScale } from '../../../sizeUtils';
import { data as dataAtom } from '../../../fetchUtils';
import { getTextTranslation as tT } from '../../../langUtils';
import BarCategoryCard from '../card/barCategoryCard';
import styles from './categoryBlock.style';

const BarCategoryBlock = () => {
    const categoriesValue = useRecoilValue(dataAtom);
    const categories = categoriesValue.filter(({ is_bar }) => is_bar)
    
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
                {tT('Bar Card')}
            </Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({item}) => (
                    <BarCategoryCard
                        item={item}
                        onPress={() => redirectToCategory(item.id)}
                    />
                )}
                keyExtractor={item => item?.id}
                contentContainerStyle={{columnGap: scale(24), marginVertical: verticalScale(50)}}
                horizontal
            />
        </View>
    );
}

export default BarCategoryBlock;