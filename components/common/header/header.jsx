import { Stack, Slot, } from 'expo-router';
import { Text, SafeAreaView, View } from 'react-native';

import MenuButton from '../menuButton/menuButton';
import styles from './header.style';

const Header = ({onPress}) => {
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
                    <MenuButton onPress={onPress} />
                ),
            }}
            />
        </>
    );
}

export default Header;