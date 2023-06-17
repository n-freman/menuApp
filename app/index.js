import {
    SafeAreaView,
    StatusBar,
    ImageBackground,
    ScrollView,
    View,
    Dimensions
} from 'react-native';

import { COLORS, images } from '../constants';
import Header from '../components/common/header/header';
import BarCategoryBlock from '../components/category/block/barCategoryBlock';
import MainMenu from '../components/category/block/mainMenu';
import { scale, verticalScale } from '../sizeUtils';

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <ImageBackground
                    source={images.background}
                    style={{
                        height: verticalScale(1220),
                    }}
                    resizeMethod='scale'
                    resizeMode='cover'
                >
            <ScrollView>
                    <StatusBar hidden />
                    <Header/>
                    <BarCategoryBlock />
                    <MainMenu />
            </ScrollView>
            </ImageBackground>

        </SafeAreaView>
    );
}

export default Home;
