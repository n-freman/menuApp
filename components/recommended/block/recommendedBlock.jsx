import { useState, useRef } from 'react';
import { View, Text, FlatList } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider
} from "@gorhom/bottom-sheet";

import { scale, verticalScale } from '../../../sizeUtils';
import styles from './recommendedBlock.style';
import RecommendedCard from '../card/recommendedCard';

const RecommendedBlock = () => {
    const bottomSheetModalRef = useRef(null);
    const snapPoints = ["70%"]
    const openModal = () => {
        bottomSheetModalRef.current?.present()
    }

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
        <BottomSheetModalProvider>
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
                        <RecommendedCard
                            item={item}
                            onClick={openModal}
                        />
                    )}
                    keyExtractor={item => item?.id}
                    contentContainerStyle={{
                        rowGap: scale(24),
                        marginVertical: verticalScale(38),
                        paddingBottom: scale(50)
                    }}
                    columnWrapperStyle={{
                        justifyContent:'space-between',
                        maxWidth: scale(800)
                    }}
                    numColumns={2}
                    scrollEnabled={true}
                />
            </View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
            >
                <View
                    style={{flex: 1, backgroundColor: "#000000"}}
                >
                    <Text>Hello</Text>
                </View>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
}

export default RecommendedBlock;
