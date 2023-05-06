import { TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './menuButton.styles';

import { images } from '../../../constants';

const MenuButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.menuButton}
            onPress={ navigation.openDrawer }
        >
            <Image 
                source={images.menuIcon}
                resizeMode="cover"
                style={styles.menuButtonImage}
            />
        </TouchableOpacity>
    );
}

export default MenuButton;
