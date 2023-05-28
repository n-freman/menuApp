import {
    SafeAreaView,
    StatusBar,
    ImageBackground
} from 'react-native';

import { COLORS, images } from '../constants';
import Header from '../components/common/header/header';
import CategoryBlock from '../components/category/block/categoryBlock';
import RecommendedBlock from '../components/recommended/block/recommendedBlock';

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <ImageBackground
                source={images.background}
                style={{height: 825}}
                resizeMode='stretch'
            >
                <StatusBar hidden />
                <Header/>
                <CategoryBlock />
                <RecommendedBlock />
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Home;
