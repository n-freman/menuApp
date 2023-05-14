import { TouchableOpacity, Text, Image } from 'react-native';
import { getObjectTranslation as oT } from "../../../../langUtils";
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
                style={styles.dishTitle}
            >
                {oT(item)}
            </Text>
            <Text
                style={styles.dishPrice}
            >
                {item.price} TMT
            </Text>
        </TouchableOpacity>
    );
}


export default Dish;
