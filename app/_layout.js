import { Stack } from 'expo-router';
import { useCallback  } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

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
        <Stack  onLayout={onLayoutRootView} />
    )
}