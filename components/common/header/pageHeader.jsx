import { Stack, useRouter } from 'expo-router';
import {
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import MenuButton from '../menuButton/menuButton';
import styles from './pageHeader.style';
import { COLORS, images } from '../../../constants';
import { scale } from '../../../sizeUtils';

const Header = (props) => {
    const router = useRouter();
    return (
        <>
            <Stack.Screen
            options={{
                headerBackground: () => (
                    <Image 
                        source={images.headerBackground}
                        style={{height: scale(120), width: scale(800), backgroundColor: COLORS.black}}
                    />
                ),
                headerStyle: styles.header,
                headerShadowVisible: false,
                headerLeft: () => (
                    <Text
                        style={styles.topTitle}
                    >
                        {props?.title}
                    </Text>
                ),
                headerTitle: "",
                headerRight: () => (
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => (
                            router.push('/')
                        )}
                    >
                        <Image
                            style={styles.backButtonImage}
                            source={images.arrowLeft}
                        />
                    </TouchableOpacity>
                )
            }}
            />
        </>
    );
}

export default Header;