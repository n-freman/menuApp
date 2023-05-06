import 'react-native-gesture-handler';
import React, {useRef, useState} from 'react';
import {
    View, Text, ScrollView, SafeAreaView, StatusBar, ImageBackground, DrawerLayoutAndroid, Button
} from 'react-native';
import { Stack, useRouter } from 'expo-router';

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
