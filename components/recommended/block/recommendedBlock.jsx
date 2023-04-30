import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './recommendedBlock.style';

const RecommmendedBlock = () => {
    const [dishes, setDishes] = useState([]);
    return (
        <View
            style={styles.recommendedBlock}
        >
            <Text
                style={styles.recommendedTitle}
            >
                Recommended
            </Text>
            <FlatList
                data={dishes}
                renderItem={({item}) => {

                }}
            />
        </View>
    );
}

export default RecommmendedBlock;
