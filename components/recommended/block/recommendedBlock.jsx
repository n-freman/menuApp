import { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider
} from "@gorhom/bottom-sheet";
import { useRecoilValue } from 'recoil';

import { scale, verticalScale } from '../../../sizeUtils';
import {
    DishBottomSheetContent,
    DishBottomSheetHandler
} from '../../common/bottomSheet';
import { getTextTranslation as tT } from '../../../langUtils';
import { data as dataAtom } from "../../../fetchUtils";
import RecommendedCard from '../card/recommendedCard';
import styles from './recommendedBlock.style';
import { images } from '../../../constants';


const RecommendedBlock = () => {
    const bottomSheetModalRef = useRef(null);
    const snapPoints = ["95%"]
    const [modalIem, setModalItem] = useState(0);
    const openModal = (id) => {
        setModalItem(id)
        bottomSheetModalRef.current?.present()
    }
    const data = useRecoilValue(dataAtom);
    let dishes = [];
    for (category of data) {
        for (dish of category?.dishes) {
            dishes.push(dish)
        }
    }
    dishes = dishes.slice(0, 50).sort(() => Math.random() - Math.random()).slice(0, 4)
    console.log(dishes)

    return (
        <BottomSheetModalProvider>
            <View
                style={styles.recommendedBlock}
            >
                <Text
                    style={styles.recommendedTitle}
                >
                    {tT('Recommended')}
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
                handleComponent={() => (<DishBottomSheetHandler
                    onPress={() => {
                        bottomSheetModalRef.current?.close()
                    }}/>)}
            >
                <DishBottomSheetContent
                    item={dishes.find((item) => (item.id === modalIem))}

                />
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
}

export default RecommendedBlock;
