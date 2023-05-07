import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import { images } from '../../../constants';
import styles from './style';

const OrderLine = ({ item }) => {
    return (
        <View
            style={styles.orderBlock}
        >
            <Image
                style={styles.orderImage}
                source={images.muffin}
            />
            <View
                style={styles.orderMiddle}
            >
                <Text
                    style={styles.orderText}
                >
                    {item.title}
                </Text>
                <View
                    style={styles.amountButtons}
                >
                    <TouchableOpacity
                        style={styles.changeAmountButton}
                    >
                        <Image
                            source={images.minus}
                        />
                    </TouchableOpacity>
                    <Text
                        style={styles.amountText}
                    >
                        0
                    </Text>
                    <TouchableOpacity
                        style={styles.changeAmountButton}
                    >
                        <Image
                            source={images.plus}
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    style={styles.orderText}
                >
                    {item.price} TMT
                </Text>
            </View>
            <TouchableOpacity
                style={styles.removeImageBlock}
            >
                <Image
                    style={styles.removeImage}
                    source={images.plus}
                />
            </TouchableOpacity>
        </View>
    )
}

export default OrderLine;
