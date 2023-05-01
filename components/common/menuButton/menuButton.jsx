import { TouchableOpacity, Image, Text } from 'react-native';

import styles from './menuButton.styles';

import { images } from '../../../constants';

const MenuButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.menuButton} onPress={onPress}>
            <Image 
                source={images.menuIcon}
                resizeMode="cover"
                style={styles.menuButtonImage}
            />
        </TouchableOpacity>
    );
}

export default MenuButton;