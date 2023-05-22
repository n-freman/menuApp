import { Stack, Slot, } from 'expo-router';
import { Text, SafeAreaView, View } from 'react-native';

import MenuButton from '../menuButton/menuButton';
import HeaderRight from '../headerRight';
import styles from './header.style';

const Header = () => {
    return (
        <>
            <Stack.Screen
                options={{
                    headerStyle: styles.header,
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text
                            style={styles.title}
                        >
                            Crystal
                        </Text>
                    ),
                    headerLeft: () => (
                        <MenuButton/>
                    ),
                    headerRight: () => (
                        <HeaderRight />
                    ),
                    drawerItemStyle: { display: 'none' }
                }}
            />
        </>
    );
}

export default Header;