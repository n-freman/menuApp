import { Drawer } from "expo-router/drawer";
import { useCallback  } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import CustomDrawer from '../components/drawer';

SplashScreen.preventAutoHideAsync();

export default function HomeLayout() {
    const [fontsLoaded] = useFonts({
        BarlowBold: require('../assets/fonts/Barlow-Bold.ttf'),
        BarlowRegular: require('../assets/fonts/Barlow-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;  

    return (
        <Drawer
            onLayout={onLayoutRootView}
            drawerContent={(props) => <CustomDrawer />}
            initialRouteName="index"
        />
    )
}