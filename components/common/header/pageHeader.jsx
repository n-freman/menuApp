import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';

import MenuButton from '../menuButton/menuButton';
import styles from './pageHeader.style';
import { images } from '../../../constants';

const Header = (props) => {
    const router = useRouter();
    return (
        <>
            <Stack.Screen
            options={{
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