import {
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';
import { useRecoilState } from 'recoil';

import { getTextTranslation as tT } from '../../../langUtils';
import { images } from '../../../constants';
import { cart as cartAtom } from '../../../globalCart';
import { discount as discountAtom } from '../../../discountUtils';
import styles from './style';

const ClearButton = () => {
    const [cart, setCart] = useRecoilState(cartAtom);
    const [discount, setDiscount] = useRecoilState(discountAtom);
    const onPress = () => {
        setCart([]);
        setDiscount(0);
    }
    return (
    <TouchableOpacity
        style={styles.clear}
        onPress={onPress}
    >
        <Text
            style={styles.clearText}
        >
            {tT("Clear")}
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
