import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './style';

const Dish = ({item, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.dishWrapper}
        >
            <Image
                source={{uri: item.image}}
                style={styles.dishImage}
            />
            <Text
                style={styles.dishText}
            >
                {item.title}
            </Text>
            <Text
                style={styles.dishText}
            >
                {item.price} TMT
            </Text>
        </TouchableOpacity>
    );
}


export default Dish;
