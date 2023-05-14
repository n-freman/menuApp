import {
    FlatList,
    ScrollView,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { useRecoilValue } from 'recoil';
import { useSearchParams } from 'expo-router';

import PageHeader from '../../components/common/header/pageHeader';
import {data as dataAtom } from '../../fetchUtils';
import { COLORS } from '../../constants';

const Category = () => {
    const { id } = useSearchParams();
    const currentCategory = useRecoilValue(dataAtom).find((item) => item.id === id);
    const dishes = currentCategory?.dishes;
    return (
       <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <PageHeader title="Signature Dishes" />
            <StatusBar hidden />
            <FlatList
                data={dishes}
                renderItem={({item}) => (
                    <Dish item={item} />
                )}
            />
       </SafeAreaView> 
    );
}

export default Category;