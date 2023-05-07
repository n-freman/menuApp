import { useState, useRef } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider
} from "@gorhom/bottom-sheet";

import { scale, verticalScale } from '../../../sizeUtils';
import { DishBottomSheetContent, DishBottomSheetHandler } from '../../common/bottomSheet';
import RecommendedCard from '../card/recommendedCard';
import styles from './recommendedBlock.style';


const RecommendedBlock = () => {
    const bottomSheetModalRef = useRef(null);
    const snapPoints = ["95%"]
    const [modalIem, setModalItem] = useState(0);
    const openModal = (id) => {
        setModalItem(id)
        bottomSheetModalRef.current?.present()
    }

    const [dishes, setDishes] = useState([
        {
            id: 1,
            title: "Lasagna with bolognese sauce",
            price: 70,
            imageUrl: "#",
            ingredients: [
                {
                    title: 'Chopped meat',
                    amount: '10 gr'
                },
                {
                    title: 'Bolognese sauce',
                    amount: '20 gr'
                },
                {
                    title: 'Lasagna Sheets',
                    amount: '15 gr'
                },
                {
                    title: 'Chesee',
                    amount: '10 gr'
                }
            ]
        },
        {
            id: 2,
            title: "Lasagna with bolognese sauce",
            price: 70,
            imageUrl: "#",
            ingredients: [
                {
                    title: 'Chopped meat',
                    amount: '10 gr'
                },
                {
                    title: 'Bolognese sauce',
                    amount: '20 gr'
                },
            ]
        },
        {
            id: 3,
            title: "Lasagna with bolognese sauce",
            price: 70,
            imageUrl: "#",
            ingredients: [
                {
                    title: 'Chopped meat',
                    amount: '10 gr'
                },
                {
                    title: 'Bolognese sauce',
                    amount: '20 gr'
                },
            ]
        },
        {
            id: 4,
            title: "Tomato Sauce",
            price: 70,
            imageUrl: "#",
            ingredients: [
                {
                    title: 'Chopped meat',
                    amount: '10 gr'
                },
                {
                    title: 'Bolognese sauce',
                    amount: '20 gr'
                },
            ]
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
                            onClick={() => openModal(item.id)}
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
                handleComponent={() => (<DishBottomSheetHandler />)}
            >
                <DishBottomSheetContent item={dishes.find(({ id }) => (id == modalIem))} />
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
}

export default RecommendedBlock;
