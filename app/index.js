import {
    SafeAreaView,
    StatusBar,
} from 'react-native';

import { COLORS } from '../constants';
import Header from '../components/common/header/header';
import CategoryBlock from '../components/category/block/categoryBlock';
import RecommendedBlock from '../components/recommended/block/recommendedBlock';

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
          {/* <ScrollView> */}
              <StatusBar hidden />
              <Header/>
              <CategoryBlock />
              <RecommendedBlock />
          {/* </ScrollView> */}
        </SafeAreaView>
    );
}

export default Home;
