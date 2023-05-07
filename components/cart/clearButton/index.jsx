import { TouchableOpacity, View, Image, Text } from 'react-native';

import { images } from '../../../constants';
import styles from './style';

const ClearButton = () => {
    return (
    <TouchableOpacity
        style={styles.clear}
    >
        <Text
            style={styles.clearText}
        >
            Clear
        </Text>
        <View
            style={styles.clearImage}
        >
            <Image
                source={images.bucket}
            />
        </View>
    </TouchableOpacity>
    );
}

export default ClearButton;
