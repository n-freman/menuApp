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
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');
    const changeDrawerPosition = () => {
      if (drawerPosition === 'left') {
        setDrawerPosition('right');
      } else {
        setDrawerPosition('left');
      }
    };

    const navigationView = () => (
        <View>
          <Text>I'm in the Drawer!</Text>
          <Button
            title="Close drawer"
            onPress={() => drawer.current.closeDrawer()}
          />
        </View>
      );
  

    const openDrawer = () => {
        drawer.current.openDrawer()
    }
    return (
       <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            {/* <ImageBackground source={require('../assets/bg.jpg')} style={{opacity: 0.2}}> */}
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition="left"
                renderNavigationView={navigationView}
            >
                <ScrollView>
                    <StatusBar hidden />
                    <Header onPress={openDrawer}/>
                    <CategoryBlock />
                    <RecommendedBlock />
                </ScrollView>
            </DrawerLayoutAndroid>
            {/* </ImageBackground> */}
       </SafeAreaView> 
    );
}

export default Home;
