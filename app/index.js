import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS } from '../constants';
import Header from '../components/common/header/header';
import CategoryBlock from '../components/category/block/categoryBlock';
import RecommmendedBlock from '../components/recommended/block/recommendedBlock';

const Home = () => {
    console.log(<Header />) 
    return (
       <SafeAreaView style={{backgroundColor: COLORS.black}}>
            <Header />
            <CategoryBlock />
            <RecommmendedBlock />
       </SafeAreaView> 
    );
}

export default Home;