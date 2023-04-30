import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { scale, verticalScale } from '../../../sizeUtils';
import styles from './recommendedBlock.style';
import RecommendedCard from '../card/recommendedCard';

const RecommendedBlock = () => {
    const [dishes, setDishes] = useState([
        {
            id: 1,
            title: "Lasagna with bolognese sauce",
            price: 70,
            imageUrl: "#"
        },
        {
            id: 2,
            title: "Lasagna with bolognese sauce",
            price: 70,
            imageUrl: "#"
        },
        {
            id: 3,
            title: "Lasagna with bolognese sauce",
            price: 70,
            imageUrl: "#"
        },
        {
            id: 4,
            title: "Lasagna with bolognese sauce",
            price: 70,
            imageUrl: "#"
        },
    ]);
    return (
        <View
            style={styles.recommendedBlock}
        >
            <Text
                style={styles.recommendedTitle}
            >
                Recommended
            </Text>
            <FlatList
                data={ dishes }
                renderItem={({ item }) => (
                    <RecommendedCard item={item} />
                )}
                keyExtractor={item => item?.id}
                contentContainerStyle={{
                    rowGap: scale(24),
                    marginVertical: verticalScale(38),
                }}
                columnWrapperStyle={{
                    justifyContent:'space-between',
                    maxWidth: scale(800)
                }}
                numColumns={2}
                ListHeaderComponent={() => (
                    <></>
                )}
                scrollEnabled={true}
                ListFooterComponent={() => (<Text>h</Text>)}
            />
        </View>
    );
}

export default RecommendedBlock;
