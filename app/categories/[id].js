import {
    View, Text, ScrollView, SafeAreaView, StatusBar, ImageBackground
} from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';

import PageHeader from '../../components/common/header/pageHeader';
import { COLORS } from '../../constants';

const Category = () => {
    const { id } = useSearchParams();
    return (
       <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            {/* <ImageBackground source={require('../assets/bg.jpg')} style={{opacity: 0.2}}> */}
                <ScrollView>
                    <PageHeader title="Signature Dishes" />
                    <StatusBar hidden />
                </ScrollView>
            {/* </ImageBackground> */}
       </SafeAreaView> 
    );
}

export default Category;