import { Stack } from 'expo-router';
import { Image } from 'react-native';

import MenuButton from '../menuButton/menuButton';
import HeaderRight from '../headerRight';
import styles from './header.style';
import { COLORS, images } from '../../../constants';
import { scale } from '../../../sizeUtils';

const Header = () => {
    return (
        <>
            <Stack.Screen
                options={{
                    headerBackground: () => (
                        <Image 
                            source={images.headerBackground}
                            style={{height: scale(120), width: "100%", backgroundColor: COLORS.black}}
                        />
                    ),
                    headerStyle: styles.header,
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Image
                            source={images.logoSilver}
                            style={{width: 150, height: 75, marginLeft: scale(80)}}
                        />
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