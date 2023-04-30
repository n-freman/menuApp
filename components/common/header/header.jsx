import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Text, SafeAreaView, View } from 'react-native';

import MenuButton from '../menuButton/menuButton';
import styles from './header.style';

const Header = (props) => {
    return (
        <>
            <Stack.Screen
            options={{
                headerStyle: styles.header,
                headerShadowVisible: false,
                headerTitle: () => (
                    <Text>Bellini</Text>
                ),
                headerLeft: () => (
                    <MenuButton />
                ),
            }}
            />
        </>
    );
}

export default Header;