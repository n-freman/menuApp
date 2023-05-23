import { useRef, useState } from 'react';
import {
    ScrollView,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    ImageBackground
} from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider
} from "@gorhom/bottom-sheet";
import { useRecoilValue } from 'recoil';
import { useSearchParams } from 'expo-router';

import Dish from '../../components/category/page/dish';
import PageHeader from '../../components/common/header/pageHeader';
import {
    DishBottomSheetContent,
    DishBottomSheetHandler
} from '../../components/common/bottomSheet';
import { getObjectTranslation as oT } from "../../langUtils";
import { data as dataAtom } from '../../fetchUtils';
import { COLORS, images } from '../../constants';
import { scale } from '../../sizeUtils';

const Category = () => {
    const bottomSheetModalRef = useRef(null);
    const snapPoints = ["95%"]
    const [modalIem, setModalItem] = useState(0);
    const openModal = (id) => {
        setModalItem(id)
        bottomSheetModalRef.current?.present()
    }

    const { id } = useSearchParams();
    const currentCategory = useRecoilValue(dataAtom).find((item) => item.id === parseInt(id));
    let dishes = currentCategory?.dishes;
    if (dishes === undefined) {
        dishes = []
    }
    return (
       <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <ImageBackground
                source={images.background}
                style={{height: 825}}
                resizeMode='stretch'
            >
                <PageHeader title={oT(currentCategory)} />
                <StatusBar hidden />
                <BottomSheetModalProvider>
                    <ScrollView
                        contentContainerStyle={styles.container}
                    >
                        {dishes?.map((item) => (
                            <Dish
                                item={item}
                                onPress={() => openModal(item.id)}
                            />
                        ))}
                    </ScrollView>
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
            </ImageBackground>

       </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: scale(52),
    }
})

export default Category;