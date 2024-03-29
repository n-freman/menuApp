import { Drawer } from "expo-router/drawer";
import { useCallback  } from 'react';
import { RecoilRoot } from 'recoil';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import * as NavigationBar from "expo-navigation-bar";

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
            // await NavigationBar.setVisibilityAsync("hidden");
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return (
        <RecoilRoot>
            <Drawer
                onLayout={onLayoutRootView}
                drawerContent={(props) => <CustomDrawer />}
                initialRouteName="index"
            />
        </RecoilRoot>
    )
}